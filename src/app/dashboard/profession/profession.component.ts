import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addProfessionView() {
    $('#add-profession.ui.modal')
    .modal('show', {
      closable : false
    });
  }

}
