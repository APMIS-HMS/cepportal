import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  constructor( public location: Location ) { }

  ngOnInit() {
  }


  back() {
    this.location.back();
  }
}
