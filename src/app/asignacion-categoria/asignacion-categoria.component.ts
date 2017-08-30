import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asignacion-categoria',
  templateUrl: './asignacion-categoria.component.html',
  styleUrls: ['./asignacion-categoria.component.css']
})
export class AsignacionCategoriaComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
