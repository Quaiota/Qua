import { observable, action } from 'mobx';

export interface IUserStore {
  setAuth: (auth: boolean) => void;
  getAuth: () => Promise<boolean>;
}

export class UserStore implements IUserStore {
  @observable userObject = {
    auth: false,
    onboarded: false,
  };

  @action setOnboardStatus = async () => {
    this.userObject.onboarded = true;

    localStorage.setItem('userObject', JSON.stringify(this.userObject));
  };

  @action async getOnboardStatus() {
    const localStorageUserObj = localStorage.getItem('userObject');
    if (!localStorageUserObj) return this.userObject.onboarded;
    const userObj = JSON.parse(localStorageUserObj);
    return userObj.onboarded;
  }

  @action setAuth = async (auth: boolean) => {
    this.userObject.auth = auth;
    localStorage.setItem('userObject', JSON.stringify(this.userObject));
  };

  @action async getAuth() {
    const localStorageUserObj = localStorage.getItem('userObject');
    if (!localStorageUserObj) return this.userObject.onboarded;
    const userObj = JSON.parse(localStorageUserObj);
    return userObj.auth;
  }

  @action async logout() {
    if (localStorage.getItem('auth')) localStorage.clear();
    window.location.replace('/onboarding/verify');
  }
}

export const userStore = new UserStore();
