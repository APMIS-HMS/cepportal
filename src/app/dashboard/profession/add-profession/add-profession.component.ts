import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfessionComponent} from '../profession.component';

@Component({
  selector: 'add-profession',
  templateUrl: './add-profession.component.html',
  styleUrls: ['./add-profession.component.css']
})
export class AddProfessionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
   
  }

}
