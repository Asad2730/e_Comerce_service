import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest, DeleteUserRequest, GetUserRequest, ListUsersRequest, ListUsersResponse, UpdateUserRequest, User, UserServiceController } from 'proto/user';
import { Observable } from 'rxjs';

@Controller()
export class UserController implements UserServiceController {

  constructor(private readonly userService: UserService) { }

  getUser(request: GetUserRequest): Promise<User> {
    try {
      return this.userService.findOne(request);
    } catch (err) {
      return Promise.reject(err)
    }
  }

  createUser(request: CreateUserRequest): Promise<User> {
    return this.userService.create(request)
  }
  updateUser(request: UpdateUserRequest): Promise<User> {
    try {
      return this.userService.update(request)
    } catch (err) {
      return Promise.reject(err)
    }
  }
  deleteUser(request: DeleteUserRequest): Promise<User> {
    try {
      return this.userService.delete(request)
    } catch (err) {
      return Promise.reject(err)
    }
  }
  listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    return this.userService.findAll(request)
  }
  S


}
