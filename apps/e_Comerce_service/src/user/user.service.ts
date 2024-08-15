import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {  ClientGrpc } from '@nestjs/microservices';
import { USER_SERVICE_NAME, UserServiceClient } from 'proto/user';





@Injectable()
export class UserService implements OnModuleInit {

   private userService:UserServiceClient
   constructor(@Inject(USER_SERVICE_NAME) private client:ClientGrpc ){}
  
  
  onModuleInit() {
    this.userService = this.client.getService<UserServiceClient>(USER_SERVICE_NAME) 
  }

  

  create(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  findAll() {
    return this.userService.listUsers({});
  }

  findOne(id: number) {
    return this.userService.getUser({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
   
    return this.userService.updateUser({id,...updateUserDto});
  }

  remove(id: number) {
    return this.userService.deleteUser({id});
  }
}
