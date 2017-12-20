import { Injectable } from '@angular/core';
import { CONSTANTS } from './global.service';
import { Http } from '@angular/http';

@Injectable()
export class TitleService {

  constructor(public http: Http) { }

  fetch() {
    return this.http.get(CONSTANTS.TITLES)
      .map(res => res.json());
  }

  quickEdit(id, name) {
    const payload = {
      'name' : name
    };
    return this.http.patch(CONSTANTS.TITLES + '/' + id, payload);
  }

}
