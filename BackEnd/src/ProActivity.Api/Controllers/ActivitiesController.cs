using Microsoft.AspNetCore.Mvc;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Services;
using ProActivity.Domain.Services;
using ProActivity.Infra.Context;

namespace ProActivity.Api.Controllers;

[ApiController]
[Route("api/activities")]
public class ActivitiesController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get([FromServices]IActivityService _activityService)
    {
        try
        {
            var activity = await _activityService.GetAllActivityAsync();
            if (activity == null) 
                return NoContent();
            return Ok(activity);
        }
        catch (Exception e)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar recuperar atividade. {e.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id, 
                                         [FromServices]IActivityService _activityService)
    {
        try
        {
            var activities = await _activityService.GetActivityByIdAsync(id);
            if (activities == null) 
                return NoContent();
            return Ok(activities);
        }
        catch (Exception e)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar recuperar atividade. {e.Message}");
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Activity model, 
                                          [FromServices]IActivityService _activityService)
    {
        try
        {
            var activity = await _activityService.AddActivity(model);
            if (activity == null) 
                return NoContent();
            return Ok(activity);
        }
        catch (Exception e)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar inserir a atividade. {e.Message}");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Activity model, 
                                         [FromServices]IActivityService _activityService)
    {
        try
        {
            if (model.Id != id)
                return this.StatusCode(StatusCodes.Status409Conflict, 
                    "está tentando atualizar a atividade errada.");  
            var activity = await _activityService.UpdateActivity(model);
            if (activity == null) 
                return NoContent();
            return Ok(activity);
        }
        catch (Exception e)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar atualizar a atividade. {e.Message}");
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id, 
                                            [FromServices]IActivityService _activityService)
    {
        try
        {
            var activity = await _activityService.GetActivityByIdAsync(id);
            if (activity == null) 
                return NoContent();
            if (await _activityService.DeleteActivity(id))
                return Ok(new { message = "Deletado" });
            else
                return BadRequest("Ocorreu um problema ao tentar deletar a atividade.");
        }
        catch (Exception e)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar deletar a atividade. {e.Message}");
        }
    } 
}