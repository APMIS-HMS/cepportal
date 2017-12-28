import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[];
  constructor(public countryService: CountryService, public router: Router) { }

  ngOnInit() {
    this.getContries();
  }

  getContries() {
    this.countryService.fetch()
      .subscribe(res => {
        this.countries = res.data;
        console.log(this.countries);
      });
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  edit(id) {
    $('#e' + id).toggleClass('hidden');
    $('#t' + id).toggleClass('hidden');
  }

  quickEdit(i, id, name) {
    console.log($('#icon' + i).removeClass('hidden'));
    this.countryService.quickEdit(id, name)
      .subscribe(res => {
        $('#icon' + i).addClass('hidden');
        this.edit(i);
      });
  }

  viewStates(id) {
    this.router.navigate(['/dashboard/country', id]);
  }
}
