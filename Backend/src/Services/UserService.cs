

using System.Data;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore.Storage;
using ConferencePlanner.Identity;
using ConferencePlanner.services;
using Npgsql;
using ConferencePlanner.Exceptions;

namespace ConferencePlanner.services;

/// <summary>
/// Represents a service for managing user-related operations.
/// </summary>
public sealed class UserService : IUserService
{
	private readonly NpgsqlDataSource _dataSource;

	/// <summary>
	/// Initializes a new instance of the <see cref="UserService"/> class.
	/// </summary>
	/// <param name="conn">The NpgsqlDataSource object used for database connection.</param>
	public UserService(NpgsqlDataSource conn)
	{
		this._dataSource = conn;
	}

	/// <summary>
	/// Deletes a user from the database.
	/// </summary>
	/// <param name="user">The user to delete.</param>
	public async void DeleteUser(User user)
	{
		string sql = @"
			DELETE FROM users u
			WHERE u.user_id = @id
		";

		await using (NpgsqlCommand command = _dataSource.CreateCommand(sql))
		{
			command.Parameters.AddWithValue("id", user.userId);
			int num = await command.ExecuteNonQueryAsync();
			if (num != 1) throw new Exception("Failed to delete user");
		}
	}

	/// <summary>
	/// Retrieves a user from the database based on their email.
	/// </summary>
	/// <param name="email">The email of the user to retrieve.</param>
	/// <returns>The user with the specified email.</returns>
	public async Task<User> GetUserByEmail(string email)
	{
		string sql = @"
			SELECT 
				u.user_id,
				u.email,
				u.first_name,
				u.last_name,
				u.dietary_restrictions,
				u.accommodations,
				u.created_on,
				u.updated_on
			FROM users u
			WHERE u.email = @email
		";
		await using (NpgsqlCommand command = _dataSource.CreateCommand(sql))
		{
			command.Parameters.AddWithValue("email", email);
			await using (NpgsqlDataReader reader = await command.ExecuteReaderAsync(CommandBehavior.SingleRow))
			{
				if (!reader.HasRows) throw new UserNotFoundException($"User with email {email} not found");
				reader.Read();
				return new User
				(
					userId: reader.GetInt32(0),
					email: reader.GetString(1),
					role: new AnonymousRole(),
					firstName: reader.GetString(2),
					lastName: reader.GetString(3),
					dietaryRestrictions: reader.GetString(4),
					accommodations: reader.GetString(5),
					createdOn: reader.GetDateTime(6),
					updatedOn: reader.GetDateTime(7)
				);
			}
		}    
	}

	/// <summary>
	/// Retrieves a user from the database based on their ID.
	/// </summary>
	/// <param name="id">The ID of the user to retrieve.</param>
	/// <returns>The user with the specified ID.</returns>
	public async Task<User> GetUserById(long id)
	{
		string sql = @"
			SELECT 
				u.user_id,
				u.email,
				u.first_name,
				u.last_name,
				u.dietary_restrictions,
				u.accommodations,
				u.created_on,
				u.updated_on
			FROM users u
			WHERE u.user_id = @id
		";
		await using (NpgsqlCommand command = _dataSource.CreateCommand(sql))
		{
			command.Parameters.AddWithValue("id", id);
			await using (NpgsqlDataReader reader = await command.ExecuteReaderAsync(CommandBehavior.SingleRow))
			{
				if (!reader.HasRows) throw new UserNotFoundException($"User with id {id} not found");
				reader.Read();
				return new User
				(
					userId: reader.GetInt32(0),
					email: reader.GetString(1),
					role: new AnonymousRole(),
					firstName: reader.GetString(2),
					lastName: reader.GetString(3),
					dietaryRestrictions: reader.GetString(4),
					accommodations: reader.GetString(5),
					createdOn: reader.GetDateTime(6),
					updatedOn: reader.GetDateTime(7)
				);
			}
		}    
	}

	/// <summary>
	/// Registers a new user in the database.
	/// </summary>
	/// <param name="email">The email of the user.</param>
	/// <param name="firstName">The first name of the user.</param>
	/// <param name="lastName">The last name of the user.</param>
	/// <param name="dietary_restrictions">The dietary restrictions of the user.</param>
	/// <param name="accommodations">The accommodations of the user.</param>
	/// <returns>The newly registered user.</returns>
	public async Task<User> RegisterUser(string email, string firstName, string lastName, string dietary_restrictions, string accommodations)
	{
		string sql = @"
			INSERT INTO users
			(
				email,
				first_name,
				last_name,
				dietary_restrictions,
				accommodations
			)
			VALUES
			(
				@email,
				@firstName,
				@lastName,
				@dietary_restrictions,
				@accommodations
			)
			RETURNING user_id
		";
		await using (NpgsqlCommand command = _dataSource.CreateCommand(sql))
		{
			command.Parameters.AddWithValue("email", email);
			command.Parameters.AddWithValue("firstName", firstName);
			command.Parameters.AddWithValue("lastName", lastName);
			command.Parameters.AddWithValue("dietary_restrictions", dietary_restrictions);
			command.Parameters.AddWithValue("accommodations", accommodations);

			var ret = await command.ExecuteScalarAsync() ?? throw new Exception("Failed to insert new user");
			long id = (long)ret;
			return await GetUserById(id);
		}
	}

	/// <summary>
	/// Updates a user in the database.
	/// </summary>
	/// <param name="user">The user to update.</param>
	/// <returns>The updated user.</returns>
	public async Task<User> UpdateUser(User user)
	{
		string sql = @"
			UPDATE users u
			SET
				u.email = @email,
				u.first_name = @firstName,
				u.last_name = @lastName,
				u.dietary_restrictions = @dietary_restrictions,
				u.accommodations = @accommodations
			WHERE u.user_id = @id
			RETURNING id
		";
		await using (NpgsqlCommand command = _dataSource.CreateCommand(sql))
		{
			command.Parameters.AddWithValue("id", user.userId);
			command.Parameters.AddWithValue("email", user.email);
			command.Parameters.AddWithValue("firstName", user.firstName);
			command.Parameters.AddWithValue("lastName", user.lastName);
			command.Parameters.AddWithValue("dietary_restrictions", user.dietaryRestrictions);
			command.Parameters.AddWithValue("accommodations", user.accommodations);

			var id = await command.ExecuteScalarAsync() ?? throw new UserNotUpdatedException("Failed to update user");
			return await GetUserById((int)id);
		}
	}
}