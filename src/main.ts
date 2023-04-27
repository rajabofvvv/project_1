import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2517);
  console.log(`Server is running on 2517`);
  
}
start();
