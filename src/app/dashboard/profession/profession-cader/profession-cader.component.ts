import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ProfessionService } from '../../../services/profession.service';
import { Profession } from '../../../models/profession';

@Component({
  selector: 'app-profession-cader',
  templateUrl: './profession-cader.component.html',
  styleUrls: ['./profession-cader.component.css']
})
export class ProfessionCaderComponent implements OnInit {

  profession: Profession;

  constructor(public activeRoute: ActivatedRoute, public professionService: ProfessionService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.getProfessionDetails(params['id']);
       });
  }

  getProfessionDetails(id) {
    this.professionService.get(id)
    .subscribe(res => {
      console.log(res);
      this.profession = res;
    });
  }
}
