using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace conference_planner.Identity;

public sealed class PresenterRole : IdentityRole<string> {
	public PresenterRole() : base("presenter") {}
}