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
  Res,
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
    return `Update kavu #${id}.`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Vymaz kavu #${id}.`;
  }
}
