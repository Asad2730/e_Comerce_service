import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE_NAME, USERS_PACKAGE_NAME } from 'proto/user';
import { join } from 'path';

@Module({
  imports:[
    ClientsModule.register([
      {
        name:USER_SERVICE_NAME,
        transport:Transport.GRPC,
        options:{
          package:USERS_PACKAGE_NAME,
          protoPath:join(__dirname,'../user.proto')
        }
      }
      
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
