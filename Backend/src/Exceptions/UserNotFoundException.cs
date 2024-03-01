namespace ConferencePlanner.Exceptions;

public sealed class UserNotFoundException : Exception
{
	public UserNotFoundException(string message) : base(message){}
}