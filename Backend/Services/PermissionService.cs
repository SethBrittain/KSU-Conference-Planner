using conference_planner.Identity;

namespace conference_planner.services;

public class PermissionService : IPermissionService
{
    public bool UserCanUpdateUser(User actor, User subject)
    {
        return actor.userId == subject.userId;
    }
}