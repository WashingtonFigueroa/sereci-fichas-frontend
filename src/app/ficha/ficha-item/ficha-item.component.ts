import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ficha-item',
  templateUrl: './ficha-item.component.html',
  styleUrls: ['./ficha-item.component.css']
})
export class FichaItemComponent implements OnInit {
  @Input() ficha: any;
  constructor() { }

  ngOnInit() {
  }

}
