using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace ConferencePlanner.Identity;

public sealed class ReviewerRole : IdentityRole<string> {
	public ReviewerRole() : base("reviewer") {}
}