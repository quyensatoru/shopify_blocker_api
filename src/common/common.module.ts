import { Module } from '@nestjs/common';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { HttpResponseModule } from './http-response/http-response.module';

@Module({
    imports: [AuthenticateModule, HttpResponseModule],
})
export class CommonModule {}
