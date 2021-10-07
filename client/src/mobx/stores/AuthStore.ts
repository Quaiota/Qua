import { observable, action } from 'mobx';

export interface IUserStore {
  auth?: boolean;
  name?: string;
}

export class UserStore implements IUserStore {
  @observable auth = false;
  @observable name = 'User';

  @action async getAuth(auth: boolean) {
    this.auth = auth;
  }
}

export const userStore = new UserStore();
