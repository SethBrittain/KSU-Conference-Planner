using ConferencePlanner.Identity;
using System.Security.Claims;

namespace ConferencePlanner.services;

public interface IUserService
{
	Task<User> GetUserById(long id);
	Task<User> GetUserByEmail(string email);
	Task<User> RegisterUser(string email, string firstName, string lastName, string dietary_restrictions, string accommodations);
	void DeleteUser(User user);
	Task<User> UpdateUser(User user);
}