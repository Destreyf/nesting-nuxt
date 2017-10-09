export interface IUser { id: number, username: string, name: string, lastName: string }

const timeOut = () => new Promise((resolve, reject) => setTimeout(resolve, 200));

export class UserService {
  private users: IUser[] = [
    { id: 1, username: 'Flamerman', name: 'Flamer', lastName: 'Man' },
    { id: 2, username: 'Trollman', name: 'Troll', lastName: 'Man' },
    { id: 3, username: 'Dudeman', name: 'Dude', lastName: 'Man' },
    { id: 4, username: 'Kiwiman', name: 'Kiwi', lastName: 'Man' },
    { id: 5, username: 'Marsman', name: 'Mars', lastName: 'Man' },
    { id: 6, username: 'Sunman', name: 'Sun', lastName: 'Man' },
    { id: 7, username: 'Waterman', name: 'Water', lastName: 'Man' },
    { id: 8, username: 'Trashman', name: 'Trash', lastName: 'Man' },
    { id: 9, username: 'Bomberman', name: 'Bomber', lastName: 'Man' },
    { id: 10, username: 'Manman', name: 'Man', lastName: 'Man' },
  ];
  public async find(username?: string, name?: string, lastName?: string) {
    await timeOut();
    if (username || name || lastName) {
      return this.users.find(user => username === user.username || name === user.name || lastName === user.lastName)
    }
    return this.users;
  }

  public async findOne(idOrProp: number | string) {
    await timeOut();
    return this.users.find(user => idOrProp === user.id || idOrProp === user.username.toLowerCase() || idOrProp === user.name.toLowerCase() || idOrProp === user.lastName.toLowerCase())
  }

  public async create(payload: IUser) {
    await timeOut();
    this.users.push(payload);
    return this.users[this.users.length - 1];
  }
  public async update(id: number, payload: IUser) {
    await timeOut();
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = payload;
    return this.users[index];
  }

  public async destroy(id: number) {
    await timeOut();
    const index = this.users.findIndex(user => user.id === id);
    return this.users.splice(index, 1);
  }

}
