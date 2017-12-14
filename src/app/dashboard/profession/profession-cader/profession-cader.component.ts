import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import {Location} from '@angular/common';
import { ProfessionService } from '../../../services/profession.service';
import { Profession } from '../../../models/profession';


@Component({
  selector: 'app-profession-cader',
  templateUrl: './profession-cader.component.html',
  styleUrls: ['./profession-cader.component.css']
})
export class ProfessionCaderComponent implements OnInit {

  profession: Profession;

  constructor(public activeRoute: ActivatedRoute, public professionService: ProfessionService, public location: Location) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.getProfessionDetails(params['id']);
       });
  }

  back() {
    this.location.back();
  }

  getProfessionDetails(id) {
    this.professionService.get(id)
    .subscribe(res => {
      console.log(res);
      this.profession = res;
    });
  }
}
