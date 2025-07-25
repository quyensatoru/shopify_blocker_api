import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpResponseFilter } from './common/http-response/http-response.filter';
import { HttpResponseInterceptor } from './common/http-response/http-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpResponseFilter());
  app.useGlobalInterceptors(new HttpResponseInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((error) => {
  console.error('App bootstrap', error);
});
