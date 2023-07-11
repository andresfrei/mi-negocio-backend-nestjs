import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  UseGuards,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSale } from 'src/sales/dto/create-sale.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne() {
    //return this.salesService.findOne(id:any);
    return 'FindOne';
  }

  @Post()
  create(@Body() body: CreateSale) {
    return this.salesService.create(body);
  }
}
