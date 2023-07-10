import { CreateSale } from './dto/create-sale.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from 'src/schemas/sale.schema';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>) {}

  async create(createSale: CreateSale) {
    const createdSale = await this.saleModel.create(createSale);
    return createdSale;
  }

  async findAll() {
    return await this.saleModel.find();
  }

  async findOne(id: string) {
    return await this.saleModel.findById(id);
  }

  async delete(id: string) {
    return await this.saleModel.findByIdAndDelete(id);
  }

  async update(id: string, sale: CreateSale) {
    return await this.saleModel.findByIdAndUpdate(id, sale);
  }
}
