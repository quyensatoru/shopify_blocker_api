import { Module } from '@nestjs/common';
import { HttpResponseService } from './http-response/http-response.service';

@Module({
  providers: [HttpResponseService]
})
export class CommonModule {}
