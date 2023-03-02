import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitinfoModule } from './gitinfo/gitinfo.module';

@Module({
  imports: [GitinfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
