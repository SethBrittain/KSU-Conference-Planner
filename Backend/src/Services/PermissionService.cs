using ConferencePlanner.Identity;

namespace ConferencePlanner.services;

public class PermissionService : IPermissionService
{
    public bool UserCanUpdateUser(User actor, User subject)
    {
        return actor.userId == subject.userId;
    }
}