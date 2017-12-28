import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  constructor(public activeRoute: ActivatedRoute, public countryService: CountryService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.getStates(params['id']);
       });
  }

  getStates(id) {
    this.countryService.getState(id)
      .subscribe();
  }

}
