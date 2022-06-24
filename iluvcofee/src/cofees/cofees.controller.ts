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
import { CreateCofeeDto } from 'src/cofees/dto/create-cofee.dto';
import { CofeesService } from './cofees.service';
import { UpdateCofeeDto } from './dto/update-cofee.dto';

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
  create(@Body() createCofeeDto: CreateCofeeDto) {
    return this.cofeeService.create(createCofeeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCofeeDto: UpdateCofeeDto) {
    return this.cofeeService.update(id, updateCofeeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cofeeService.remove(id);
  }
}
