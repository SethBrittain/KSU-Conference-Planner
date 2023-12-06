using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace conference_planner.Identity;

public sealed class AnonymousRole : IdentityRole<string> {
	public AnonymousRole() : base("Anonymous") {}
}