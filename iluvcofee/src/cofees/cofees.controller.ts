import { Controller, Get, Param } from '@nestjs/common';

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
}
