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

  quickEdit(id, name) {
    const payload = {
      'name' : name
    };
    return this.http.patch(CONSTANTS.COUNTRIES + '/' + id, payload);
  }

}
