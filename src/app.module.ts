import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransformService } from './usecase/transform/transform.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env-local'],
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, TransformService],
})
export class AppModule {}
