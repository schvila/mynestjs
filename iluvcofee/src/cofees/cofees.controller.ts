import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('cofees')
export class CofeesController {
  @Get()
  findAll() {
    return 'Moje kavy.';
  }
  @Get('flavours')
  findFlavours() {
    return 'Vsechny moje prichute.';
  }
  //localhost:3000/cofees/report?limit=20&offset=5
  @Get('report')
  report(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Report limit: ${limit} offset: ${offset}`;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Nacte kavu #${id}.`;
  }
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Update kavu #${id}  body name: ${body.name}.`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Vymaz kavu #${id}.`;
  }
}
