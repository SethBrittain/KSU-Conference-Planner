using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace conference_planner.Identity;

/// <summary>
/// Represents a user in the conference planner system.
/// </summary>
public class User {
	/// <summary>
	/// Gets the user ID.
	/// </summary>
	public int userId { get; private set; }

	/// <summary>
	/// Gets the user's email address.
	/// </summary>
	public string email { get; private set; }

	/// <summary>
	/// Gets or sets the user's role.
	/// </summary>
	public IdentityRole<string> role { get; private set; }

	/// <summary>
	/// Gets the user's first name.
	/// </summary>
	public string firstName { get; private set; }

	/// <summary>
	/// Gets the user's last name.
	/// </summary>
	public string lastName { get; private set; }

	/// <summary>
	/// Gets the user's dietary restrictions.
	/// </summary>
	public string dietaryRestrictions { get; private set; }

	/// <summary>
	/// Gets the user's accommodations.
	/// </summary>
	public string accommodations { get; private set; }

	/// <summary>
	/// Gets the date and time when the user was created.
	/// </summary>
	public DateTime createdOn { get; private set; }

	/// <summary>
	/// Gets the date and time when the user was last updated.
	/// </summary>
	public DateTime updatedOn { get; private set; }

	/// <summary>
	/// Initializes a new instance of the <see cref="User"/> class.
	/// </summary>
	/// <param name="userId">The user ID.</param>
	/// <param name="email">The user's email address.</param>
	/// <param name="role">The user's role.</param>
	/// <param name="firstName">The user's first name.</param>
	/// <param name="lastName">The user's last name.</param>
	/// <param name="dietaryRestrictions">The user's dietary restrictions.</param>
	/// <param name="accommodations">The user's accommodations.</param>
	/// <param name="createdOn">The date and time when the user was created.</param>
	/// <param name="updatedOn">The date and time when the user was last updated.</param>
	public User(int userId, string email, IdentityRole<string> role, string firstName, string lastName, string dietaryRestrictions, string accommodations, DateTime createdOn, DateTime updatedOn)
	{
		this.userId = userId;
		this.email = email;
		this.role = role;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dietaryRestrictions = dietaryRestrictions;
		this.accommodations = accommodations;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
	}
}