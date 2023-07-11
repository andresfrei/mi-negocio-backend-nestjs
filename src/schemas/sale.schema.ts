import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Sale {
  @Prop({ required: true, trim: true })
  product: string;
  @Prop({ required: true, trim: true })
  category: string;
  @Prop({ required: true })
  sale: number;
  @Prop({ required: true })
  cost: number;
  @Prop({ required: true })
  margin: number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
