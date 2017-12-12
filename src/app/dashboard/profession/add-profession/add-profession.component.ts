import { Component, OnInit } from '@angular/core';
import {ProfessionComponent} from '../profession.component';
import { Profession } from '../../../models/profession';
import { Cader } from '../../../models/cader';
import { Error } from '../../../models/error';

@Component({
  selector: 'add-profession',
  templateUrl: './add-profession.component.html',
  styleUrls: ['./add-profession.component.css']
})
export class AddProfessionComponent implements OnInit {
  profession: Profession;
  cader: Cader;
  caders: Cader[];
  error: Error;

  constructor() { }

  ngOnInit() {
  }

  addCaders(name) {
    const newCader = this.cader;
    newCader.name = name;
    this.caders.push(newCader);
  }
  addProfession(name) {
    if (this.caders.length > 0) {
      const newProfession = this.profession;
      newProfession.name = name;
      newProfession.caders = this.caders;
    } else {
      this.error.message = 'Please cader first';
      this.error.isSet = true;
    }
  }

}
