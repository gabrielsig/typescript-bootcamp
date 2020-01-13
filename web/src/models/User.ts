// import { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';

import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps>{
  // private events: Eventing = new Eventing();
  // private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  // private attributes: Attributes<UserProps>;
  
  // constructor(attrs: UserProps) {
  //   this.attributes = new Attributes<UserProps>(attrs);
  // }

  static buildUser(attrs: UserProps): User {
    return new User (
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing(),
    );
  }

  static builUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.buildUser(json)
    );
  }

  isAdminUser = (): boolean => {
    return this.get('id') === 1;
  }

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({age});
  }
}