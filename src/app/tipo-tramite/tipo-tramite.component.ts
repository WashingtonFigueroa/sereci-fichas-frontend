import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipo-tramite',
  templateUrl: './tipo-tramite.component.html',
  styleUrls: ['./tipo-tramite.component.css']
})
export class TipoTramiteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
