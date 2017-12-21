import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[];
  constructor(public countryService: CountryService) { }

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

}
