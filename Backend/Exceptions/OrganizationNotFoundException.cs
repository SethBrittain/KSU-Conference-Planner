namespace conference_planner.Exceptions;

public sealed class OrganizationNotFoundException : Exception
{
	public OrganizationNotFoundException(string message) : base(message){}
}