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

}
