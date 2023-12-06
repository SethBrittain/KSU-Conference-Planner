using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace conference_planner.Identity;

public sealed class ReviewerRole : IdentityRole<string> {
	public ReviewerRole() : base("reviewer") {}
}