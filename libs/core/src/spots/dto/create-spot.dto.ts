import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSpotDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
