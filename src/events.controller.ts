import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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
  create() {
    return 'Creat new event';
  }
  @Patch(':id')
  update(@Param('id') id: string) {
    return `Update event ${id}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Delete event ${id}`;
  }
}
