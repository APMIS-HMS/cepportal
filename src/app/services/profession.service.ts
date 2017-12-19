import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CONSTANTS } from './global.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ProfessionService {

  constructor(public http: Http) { }

  add(profession){
    return this.http.post(CONSTANTS.PROFESSION, profession)
      .map(res => res.json());
  }
  fetch() {
    return this.http.get(CONSTANTS.PROFESSION)
      .map(res => res.json());
  }
  get(id) {
    return this.http.get(CONSTANTS.PROFESSION + '/' + id)
    .map(res => res.json());
  }

  quickEdit(id, name) {
    const payload = {
      'name' : name
    };
    return this.http.patch(CONSTANTS.PROFESSION + '/' + id, payload);
  }

  saveCaders(id, caders) {
    const payload = {
      caders : caders
    }
    return this.http.patch(CONSTANTS.PROFESSION + '/' + id, payload);
  }

}
