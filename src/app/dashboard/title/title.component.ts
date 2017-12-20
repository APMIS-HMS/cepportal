import { Component, OnInit } from '@angular/core';
import { Title } from '../../models/title';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titles: Title[];

  constructor(public titleService: TitleService) { }

  ngOnInit() {
    this.getTitle();
  }

  getTitle() {
    this.titleService.fetch()
      .subscribe(res => {
        this.titles = res.data;
        console.log(this.titles);
      });
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

}
