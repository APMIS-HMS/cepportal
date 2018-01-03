import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../services/country.service';
import { State } from '../../../models/state';
import { Country } from '../../../models/country';
import { Location } from '@angular/common';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  country: Country;

 constructor(public activeRoute: ActivatedRoute, public countryService: CountryService, public location: Location) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.getStates(params['id']);
       });
  }

  back() {
    this.location.back();
  }

  getStates(id) {
    this.countryService.getState(id)
      .subscribe(
        res => {
          this.country = res;
        }
      );
  }

}
