import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  email: string;
  @Prop({ required: true, trim: true })
  password: string;
  @Prop({ default: 0 })
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
