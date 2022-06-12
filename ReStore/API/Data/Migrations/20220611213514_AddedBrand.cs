using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class AddedBrand : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PictureURL",
                table: "Products",
                newName: "PictureUrl");

            migrationBuilder.AddColumn<string>(
                name: "Brand",
                table: "Products",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Brand",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "PictureUrl",
                table: "Products",
                newName: "PictureURL");
        }
    }
}
