import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from '@app/core/events/events.service';
import { CreateEventRequest } from './request/create-event.request';
import { UpdateEventRequest } from './request/update-event.resquest';
import { ReserveSpotRequest } from './request/reserve-spot.resquest';
import { AuthGuard } from '@app/core/auth/auth.guard';

@Controller('eventos')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventRequest: CreateEventRequest) {
    return this.eventsService.create(createEventRequest);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventRequest: UpdateEventRequest,
  ) {
    return this.eventsService.update(id, updateEventRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
  
  @UseGuards(AuthGuard)
  @Post(':id/reserve')
  reserveSpots(
    @Body() Request: ReserveSpotRequest,
    @Param('id') eventId: string,
  ) {
    console.log(Request);
    return this.eventsService.reserveSpot({ ...Request, eventId });
  }
}
