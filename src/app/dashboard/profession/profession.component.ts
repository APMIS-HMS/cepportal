import { Component, OnInit } from '@angular/core';
import { ProfessionService } from '../../services/profession.service';
import { Profession } from '../../models/profession';
import { TitleCasePipe } from '@angular/common';


declare var $;

@Component({
  selector: 'profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
  professions: Profession[];

  constructor(public professionService: ProfessionService) { }

  ngOnInit() {
    this.getProfession();
  }

  addProfessionView() {
    $('#add-profession.ui.modal')
    .modal('show', {
      closable : false
    });
  }

  getProfession() {
    this.professionService.get()
      .subscribe(res => {
        this.professions = res.data;
        console.log(this.professions);
      });
  }

}
