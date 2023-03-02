import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { GitinfoController } from './gitinfo.controller';
import { GitinfoService } from './gitinfo.service';

@Module({
  imports: [HttpModule],
  controllers: [GitinfoController],
  providers: [GitinfoService],
})
export class GitinfoModule {}
