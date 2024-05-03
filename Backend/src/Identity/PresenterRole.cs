using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace ConferencePlanner.Identity;

public sealed class PresenterRole : IdentityRole<string> {
	public PresenterRole() : base("presenter") {}
}