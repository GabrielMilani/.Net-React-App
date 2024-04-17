using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Repositories;
using ProActivity.Domain.Interfaces.Services;

namespace ProActivity.Domain.Services;

public class ActivityService : IActivityService
{
    private readonly IActivityRepository _activityRepository;

    public ActivityService(IActivityRepository activityRepository)
    {
        _activityRepository = activityRepository;
    }

    public async Task<Activity> AddActivity(Activity model)
    {
        if (await _activityRepository.GetByTitleAsync(model.Title) != null)
            throw new Exception("Já existe uma atividade com esse titulo!");
        if (await _activityRepository.GetByIdAsync(model.Id) == null)
        {
            _activityRepository.Add(model);
            if (await _activityRepository.SaveChangesAsync())
                return model;
        }
        return null;
    }

    public async Task<bool> ConcludeActivity(Activity model)
    {
        if (model != null)
        {
            model.Conclude();
            _activityRepository.Update<Activity>(model);
            return await _activityRepository.SaveChangesAsync();
        }
        return false;
    }

    public async Task<bool> DeleteActivity(int id)
    {
        var activity = await _activityRepository.GetByIdAsync(id);
        if (activity == null)
            throw new Exception("Atividade que tentou deletar não existe.");
        _activityRepository.Delete<Activity>(activity);
        return await _activityRepository.SaveChangesAsync();

    }

    public async Task<Activity> GetActivityByIdAsync(int id)
    {
        try
        {
            var activity = await _activityRepository.GetByIdAsync(id);
            if (activity == null)
                throw new Exception("Atividade que tentou pesquisar não existe.");
            return activity;
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    public async Task<Activity[]> GetAllActivityAsync()
    {
        try
        {
            var activities = await _activityRepository.GetAllAsync();
            if (activities == null)
                throw new Exception("Atividade que tentou pesquisar não existe.");
            return activities;
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    public async Task<Activity> UpdateActivity(Activity model)
    {
        if(model.ConclusionDate != null)
            throw new Exception("Não e possivel alterar uma atividade ja concluida!");
        
        if (await _activityRepository.GetByIdAsync(model.Id) != null)
        {
            _activityRepository.Update(model);
            if (await _activityRepository.SaveChangesAsync())
                return model;
        }
        return null;
    }
}