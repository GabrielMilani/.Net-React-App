using ProActivity.Domain.Interfaces.Repositories;
using ProActivity.Infra.Context;

namespace ProActivity.Infra.Repositories;

public class GeneralRepository : IGeneralRepository
{
    private readonly AppDbContext _context;

    public GeneralRepository(AppDbContext context)
    {
        _context = context;
    }

    public void Add<T>(T entity) where T : class
    {
        _context.Add(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
        _context.Remove(entity);
    }

    public void DeleteSeveral<T>(T entity) where T : class
    {
        _context.RemoveRange(entity);
    }

    public async Task<bool> SaveChangesAsync()
    {
       return (await _context.SaveChangesAsync()) > 0;
    }

    public void Update<T>(T entity) where T : class
    {
        _context.Update(entity);
    }
}