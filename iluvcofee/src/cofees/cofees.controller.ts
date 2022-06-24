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
import { CofeesService } from './cofees.service';

@Controller('cofees')
export class CofeesController {
  constructor(private readonly cofeeService: CofeesService) {}
  @Get()
  findAll() {
    return this.cofeeService.findAll();
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
    return this.cofeeService.findOne(id);
  }
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.cofeeService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.cofeeService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cofeeService.remove(id);
  }
}
