using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace ConferencePlanner.Identity;

public sealed class AdminRole : IdentityRole<string> {
	public AdminRole() : base("admin") {}
}