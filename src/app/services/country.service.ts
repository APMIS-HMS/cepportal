import { Injectable } from '@angular/core';
import { CONSTANTS } from './global.service';
import { Http } from '@angular/http';

@Injectable()
export class CountryService {

  constructor(public http: Http) { }

  fetch() {
    return this.http.get(CONSTANTS.COUNTRIES)
      .map(res => res.json());
  }

  add(country) {
    return this.http.post(CONSTANTS.COUNTRIES, country)
      .map(res => res.json());
  }

  quickEdit(id, name) {
    const payload = {
      'name' : name
    };
    return this.http.patch(CONSTANTS.COUNTRIES + '/' + id, payload);
  }

  getState(id) {
    return this.http.get(CONSTANTS.COUNTRIES + '/' + id)
    .map(res => res.json());
  }

  saveState(id, states) {
    const payload = {
      states : states
    };
    return this.http.patch(CONSTANTS.COUNTRIES + '/' + id, payload);
  }

  delete(id) {
    return this.http.delete(CONSTANTS.COUNTRIES + '/' + id)
      .map(res =>  res.json());
  }


}
