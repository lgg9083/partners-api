import { IsISO8601, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsISO8601()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
