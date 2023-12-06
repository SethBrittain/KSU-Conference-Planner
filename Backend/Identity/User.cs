using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace conference_planner.Identity;

public class User {
    public int userId { get; private set; }
    public string email { get; private set; }

	public IdentityRole<string> role { get; private set; }

    public string firstName { get; private set; }

    public string lastName { get; private set; }

    public string dietaryRestrictions { get; private set; }

    public string accommodations { get; private set; }

    public DateTime createdOn { get; private set; }

    public DateTime updatedOn { get; private set; }

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