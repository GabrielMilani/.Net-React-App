using ProActivity.Domain.Entities;

namespace ProActivity.Domain.Interfaces.Repositories;

public interface IActivityRepository : IGeneralRepository
{
    Task<Activity[]> GetAllAsync();
    Task<Activity> GetByIdAsync(int id);
    Task<Activity> GetByTitleAsync(string title);
}