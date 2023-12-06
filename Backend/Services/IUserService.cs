using conference_planner.Identity;
using System.Security.Claims;

namespace conference_planner.services;

public interface IUserService
{
	Task<User> GetUserById(long id);
	Task<User> GetUserByEmail(string email);
	Task<User> RegisterUser(string email, string firstName, string lastName, string dietary_restrictions, string accommodations);
	void DeleteUser(User user);
	Task<User> UpdateUser(User user);
}