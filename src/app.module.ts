import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URI = 'mongodb://localhost/mi-negocio'

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI), 
    SalesModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
