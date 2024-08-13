import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { USERS_PACKAGE_NAME } from 'proto/user';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice< MicroserviceOptions>(UserModule,{
     transport:Transport.GRPC,
     options:{
       package:USERS_PACKAGE_NAME,
       protoPath:join(__dirname,'../user.proto')
     },
  });
  await app.listen();
}
bootstrap();
