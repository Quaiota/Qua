import { observable, action } from 'mobx';

export interface IUserStore {
  setAuth: (auth: boolean) => void;
  getAuth: () => Promise<boolean>;
}

export class UserStore implements IUserStore {
  @observable private auth = false;

  @action async setAuth(auth: boolean) {
    this.auth = auth;
    localStorage.setItem('auth', JSON.stringify(this.auth));
  }

  @action async getAuth() {
    const authstate = localStorage.getItem('auth');
    if (!authstate) return this.auth;
    return JSON.parse(authstate);
  }

  @action async logout() {
    if (localStorage.getItem('auth')) localStorage.clear();
    window.location.replace('/onboarding/verify');
  }
}

export const userStore = new UserStore();
