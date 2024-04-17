using Microsoft.EntityFrameworkCore;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Repositories;
using ProActivity.Infra.Context;

namespace ProActivity.Infra.Repositories;

public class ActivityRepository : GeneralRepository, IActivityRepository
{
    private readonly AppDbContext _context;

    public ActivityRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }

    public async Task<Activity[]> GetAllAsync()
    {
        IQueryable<Activity> query = _context.Activities;

        query = query.AsNoTracking()
                     .OrderBy(x => x.Id);
        return await query.ToArrayAsync();
    }

    public async Task<Activity> GetByIdAsync(int id)
    {
        IQueryable<Activity> query = _context.Activities;

        query = query.AsNoTracking()
                     .OrderBy(x => x.Id)
                     .Where(x => x.Id == id);
        return await query.FirstOrDefaultAsync();
    }

    public async Task<Activity> GetByTitleAsync(string title)
    {
        IQueryable<Activity> query = _context.Activities;

        query = query.AsNoTracking()
                     .OrderBy(x => x.Id)
                     .Where(x => x.Title == title);
        return await query.FirstOrDefaultAsync();
    }
}