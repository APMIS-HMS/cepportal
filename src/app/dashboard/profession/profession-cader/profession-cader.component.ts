import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import {Location} from '@angular/common';
import { ProfessionService } from '../../../services/profession.service';
import { Profession } from '../../../models/profession';
import { Cader } from '../../../models/cader';
declare var $;


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
  edit(id) {
    $('#e' + id).toggleClass('hidden');
    $('#t' + id).toggleClass('hidden');
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  quickEdit(i, id, name) {
    console.log(i);
    console.log($('#icon' + i).removeClass('hidden'));
    // $('#e' + i).find('i');
    this.professionService.saveCaders(id, this.profession.caders)
      .subscribe(res => {
        console.log(res);
        console.log($('#icon' + i).addClass('hidden'));
        this.edit(i);
      });
  }
}
