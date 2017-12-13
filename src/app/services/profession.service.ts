import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CONSTANTS } from './global.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ProfessionService {

  constructor(public http: Http) { }

  get() {
    return this.http.get(CONSTANTS.PROFESSION)
      .map(res => res.json());
  }
}
