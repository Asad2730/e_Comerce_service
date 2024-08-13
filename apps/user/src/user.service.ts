import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserRequest, DeleteUserRequest, GetUserRequest, ListUsersResponse, Role, UpdateUserRequest, User } from 'proto/user';

@Injectable()
export class UserService implements OnModuleInit {
  private readonly userDb:User[];

  onModuleInit() {
    for(let i=0;i<100;i++){
      let role:Role 
      role = Role.CUSTOMER
      if(i%2 === 0 && i < 50){
        role =  Role.ADMIN
      }

      let newUser:CreateUserRequest = {email:`User${i}@gmail.com`,firstName:'user',lastName:`${i}`,address:`address:${i}`,
      passwordHash:'123',phoneNumber:'12345',role:role,username:`user#${i}`}
      this.create(newUser)
    }
  }
  

  create(request:CreateUserRequest):Promise<User> {
     const user:User = {
     ...request,
     id:this.userDb.length+1
     }
      this.userDb.push(user)
     return Promise.resolve(user)
  }


   findAll({}):Promise<ListUsersResponse>{
    return Promise.resolve({users:this.userDb})
  }
  
  findOne(request: GetUserRequest): Promise<User>{
    const user:User = this.userDb.find((user)=>user.id === request.id)
    if(!user) throw new Error(`user not found with Id:${request.id}`)
    return Promise.resolve(user)  
  }

  
  update(request: UpdateUserRequest): Promise<User>{
    const idx:number = this.userDb.findIndex((user)=>user.id === request.id)
    if(idx === -1)throw  new Error(`user not found with Id:${request.id}`)
    Object.assign(this.userDb[idx],request)
    return Promise.resolve(this.userDb[idx])   
  }
   
  delete(request: DeleteUserRequest): Promise<User> {
    const idx:number = this.userDb.findIndex((user)=>user.id === request.id)
    if(idx === -1)throw  new Error(`user not found with Id:${request.id}`)
    const user =  this.userDb[idx]
    this.userDb.splice(idx, 1);
    return Promise.resolve(user)   
  }

}
