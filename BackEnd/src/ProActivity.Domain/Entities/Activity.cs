using ProActivity.Domain.Entities.Enums;

namespace ProActivity.Domain.Entities;
public class Activity
{
    public Activity()
    {
        CreateDate = DateTime.Now;
        ConclusionDate = null;
    }

    public Activity(int id, string? title, string? description, EPriorityType priority) : this()
    {
        Id = id;
        Title = title;
        Description = description;
        Priority = priority;
    }

    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? ConclusionDate { get; set; }
    public EPriorityType Priority { get; set; }

    public void Conclude()
    {
        if (ConclusionDate == null)
            ConclusionDate = DateTime.Now;
        else
            throw new Exception($"Atividade ja concluida.");
    }  
}