import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ALLExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ALLExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
