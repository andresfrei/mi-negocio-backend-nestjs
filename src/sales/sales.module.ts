import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { Sale, SaleSchema } from 'src/schemas/sale.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
