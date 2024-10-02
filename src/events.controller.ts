import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventsDto } from './create.events.dto';
import { UpdateEventsDto } from './update.events.dto';

@Controller('events')
export class EventsController {
  @Get()
  getAll() {
    return 'All events';
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return `Get single event ${id}`;
  }
  @Post()
  create(@Body() input: CreateEventsDto): CreateEventsDto {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventsDto) {
    return `Update event ${id} ${input.when}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Delete event ${id}`;
  }
}
