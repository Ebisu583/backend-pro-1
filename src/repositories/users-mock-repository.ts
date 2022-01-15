import { User } from '../interfaces/user.interface';
import { UsersRepository } from './users-repository.interface';
import shortid from 'shortid';
export class UsersMockRepository implements UsersRepository {
  private users: Array<User> = [];

  getAllItems(): Array<User>{
    return this.users;
  }
  getItemById(id: string): User {
    return this.users.find((user) => user.id == id);
  }
  findUserByName(name: string): User {
    return this.users.find((user) => user.name == name);
  }
  deleteItem(id: string): boolean {
    const user = this.users.find((user) => user.id == id);
    if(user) {
      const usersIds = this.users.map((user) => user.id);
      const indexToDelete = usersIds.indexOf(id);
      this.users.splice(indexToDelete, 1);
      // this.users = this.users.filter((user) => user.id != id);
      return true;
    }
    else {
      return false;
    }
  }
  addItem(item: User): User {
      item.id = shortid.generate();
      item.createdAt = new Date();
      item.updatedAt = new Date();
      this.users.push(item);
      return item;
  }

  updateItem(id: string, item: User): User {
      this.users = this.users.map(i => {
          if (i.id === id) {
              return {
                  ...item,
                  id: i.id,
                  createdAt: i.createdAt,
                  updatedAt: new Date()
              };
          }

          return i;
      });

      return this.getItemById(id);
  }
}