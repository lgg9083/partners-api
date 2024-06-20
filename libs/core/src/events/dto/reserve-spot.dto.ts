import { TicketKind } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum, IsArray } from 'class-validator';

export class ReserveSpotDto {
  @IsString()
  @IsArray()
  @IsNotEmpty()
  spots: string[];

  @IsEnum(TicketKind)
  @IsNotEmpty()
  ticket_kind: TicketKind;

  @IsString()
  @IsNotEmpty()
  email: string;
}
