using ConferencePlanner.Identity;
namespace ConferencePlanner.services;
public interface IPermissionService {
    bool UserCanUpdateUser(User actor, User subject);
}