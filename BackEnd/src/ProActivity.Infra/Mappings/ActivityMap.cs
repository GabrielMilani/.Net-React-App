using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProActivity.Domain.Entities;

namespace ProActivity.Infra.Mappings;

public class ActivityMap : IEntityTypeConfiguration<Activity>
{
    public void Configure(EntityTypeBuilder<Activity> builder)
    {
        builder.ToTable("Activities");
        builder.Property(x => x.Title)
            .HasColumnType("varchar(100)");
        builder.Property(x => x.Description)
            .HasColumnType("varchar(255)");
    }
}