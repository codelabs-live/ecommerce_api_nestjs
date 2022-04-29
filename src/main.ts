import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('E-Commerce API')
    .setDescription('First E-Commerce NestJs Api by Kamlesh')
    .setVersion('1.0')
    .addTag('E-Commerce')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
