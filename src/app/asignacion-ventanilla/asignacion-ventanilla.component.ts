import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asignacion-ventanilla',
  templateUrl: './asignacion-ventanilla.component.html',
  styleUrls: ['./asignacion-ventanilla.component.css']
})
export class AsignacionVentanillaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
