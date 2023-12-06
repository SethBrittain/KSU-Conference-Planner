using conference_planner.Identity;
namespace conference_planner.services;
public interface IPermissionService {
    bool UserCanUpdateUser(User actor, User subject);
}