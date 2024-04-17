using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProActivity.Application;
using ProActivity.Domain.Interfaces.Repositories;
using ProActivity.Domain.Interfaces.Services;
using ProActivity.Domain.Services;
using ProActivity.Infra.Context;
using ProActivity.Infra.Repositories;

namespace ProActivity.CrossCutting.AppDependency;

public static class DependencyInjection
{
    public static void AddConfiguration(this IServiceCollection services, IConfiguration configuration)
    {
        Configuration.Database.ConnectionString =
            configuration.GetConnectionString("DefaultConnection") ?? string.Empty;
    }
    public static void AddDatabase(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => options.UseSqlite(Configuration.Database.ConnectionString));
    }  
    public static void AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<IActivityRepository, ActivityRepository>();
        services.AddScoped<IGeneralRepository, GeneralRepository>();
    } 
    public static void AddServices(this IServiceCollection services)
    {
        services.AddScoped<IActivityService, ActivityService>();
    } 
}