using Microsoft.EntityFrameworkCore;
using ProActivity.Domain.Entities;
using ProActivity.Infra.Mappings;

namespace ProActivity.Infra.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    { }

    public DbSet<Activity> Activities { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new ActivityMap());
    }
}