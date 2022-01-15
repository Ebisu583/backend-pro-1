import BaseController from './base-controller';
import { User } from '../interfaces/user.interface';
import { UsersRepository } from '../repositories/users-repository.interface';

export class UsersController extends BaseController<User> {
  constructor(private usersRepository: UsersRepository) {
      super(usersRepository);
  }

  findUserByName(name: string): User {
      return this.usersRepository.findUserByName(name);
  }
}