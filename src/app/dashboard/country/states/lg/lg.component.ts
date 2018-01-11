import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../../services/country.service';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  country;
  state;

  constructor( public location: Location, public activeRoute: ActivatedRoute, public countryService: CountryService ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.getLGs(params['id'], params['id2']);
       });
  }

  getLGs(id, id2) {
    this.countryService.getState(id)
      .subscribe(res => {
        this.country = res;
        this.state = res.states.filter((obj) => {
                      return obj._id === id2;
                    })[0];
      console.log(this.state);
      });
  }


  back() {
    this.location.back();
  }
}
