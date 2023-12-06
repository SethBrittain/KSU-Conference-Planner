using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace conference_planner.Identity;

public sealed class AdminRole : IdentityRole<string> {
	public AdminRole() : base("admin") {}
}