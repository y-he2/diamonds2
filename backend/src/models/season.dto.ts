import { ApiProperty } from "@nestjs/swagger";
import { ISeason } from "../types";

export class SeasonDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  endDate: Date;

  public static from(dto: Partial<SeasonDto>) {
    const seasonObj = new SeasonDto();
    seasonObj.id = dto.id;
    seasonObj.name = dto.name;
    seasonObj.startDate = dto.startDate;
    seasonObj.endDate = dto.endDate;
    return seasonObj;
  }

  public static create(dto: Partial<SeasonDto>) {
    // Create season dto with no id!
    const seasonObj = new SeasonDto();
    seasonObj.name = dto.name;
    seasonObj.startDate = dto.startDate;
    seasonObj.endDate = dto.endDate;
    return seasonObj;
  }

  public static fromEntity(entity: ISeason) {
    return this.from({
      id: entity.id,
      name: entity.name,
      startDate: entity.startDate,
      endDate: entity.endDate,
    });
  }
}
