import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
