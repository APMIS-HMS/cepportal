import { Component, OnInit } from '@angular/core';
import { ProfessionService } from '../../services/profession.service';
import { Profession } from '../../models/profession';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';


declare var $;

@Component({
  selector: 'profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
  professions: Profession[];

  constructor(public professionService: ProfessionService, public router: Router) { }

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
    this.professionService.fetch()
      .subscribe(res => {
        this.professions = res.data;
        console.log(this.professions);
      });
  }

  getProfessionDetails(id) {
    this.router.navigate(['/dashboard/profession', id]);
  }
}
