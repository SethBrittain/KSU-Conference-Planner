namespace ConferencePlanner.Exceptions;

public sealed class OrganizationNotFoundException : Exception
{
	public OrganizationNotFoundException(string message) : base(message){}
}