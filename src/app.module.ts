import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SalesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/minegocio'),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
