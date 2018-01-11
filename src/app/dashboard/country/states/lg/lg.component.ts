import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../../services/country.service';
declare var $;

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

  add() {
    $('#addModal')
    .modal({
      closable  : true,
      onApprove : () => {
        this.addLG($('#add-content').val());
      }
    })
    .modal('show');
  }

  addLG(name) {
    const newLG = {
      'name' : name
    };
    this.country.states = this.country.states.filter(e => e !== this.state);
    this.state.lgs.push(newLG);
    this.country.states.push(this.state);
    this.countryService.saveState(this.country._id, this.country.states)
      .subscribe();
  }

  back() {
    this.location.back();
  }
}
