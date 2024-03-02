using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace ConferencePlanner.Identity;

public sealed class AnonymousRole : IdentityRole<string> {
	public AnonymousRole() : base("Anonymous") {}
}