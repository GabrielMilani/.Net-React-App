namespace ProActivity.Domain.Interfaces.Repositories;

public interface IGeneralRepository
{
    void Add<T>(T entity) where T : class;
    void Update<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;
    void DeleteSeveral<T>(T entity) where T : class;
    Task<bool> SaveChangesAsync();
}