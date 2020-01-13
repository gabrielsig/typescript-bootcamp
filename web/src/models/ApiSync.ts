import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const {id} = data;

    if (id){
      // update existing user
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // create new user
      return axios.post(this.rootUrl, data);
    }
  }
}