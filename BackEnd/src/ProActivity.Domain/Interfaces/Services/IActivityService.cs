using ProActivity.Domain.Entities;

namespace ProActivity.Domain.Interfaces.Services;

public interface IActivityService
{
    Task<Activity> AddActivity(Activity model);
    Task<Activity> UpdateActivity(Activity model);
    
    Task<bool> DeleteActivity(int id);
    Task<bool> ConcludeActivity(Activity model);

    Task<Activity[]> GetAllActivityAsync();
    Task<Activity> GetActivityByIdAsync(int id);
}