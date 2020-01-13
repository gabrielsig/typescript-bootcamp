import axios, { AxiosResponse } from 'axios';

import {Eventing} from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  rootUrl: string;
  deserialize: (json: K) => T

  constructor(rootUrl: string, deserialize: (json: K) => T) {
    this.rootUrl = rootUrl;
    this.deserialize =  deserialize;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        // loop through models
        response.data.forEach((value: K) => {
          const model = this.deserialize(value);
          this.models.push(model);
        });
        // trigger change event
        this.trigger('change');
      });
  }
  
}