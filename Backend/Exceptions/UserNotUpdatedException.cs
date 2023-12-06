namespace conference_planner.Exceptions;

public sealed class UserNotUpdatedException : Exception
{
	public UserNotUpdatedException(string message) : base(message){}
}