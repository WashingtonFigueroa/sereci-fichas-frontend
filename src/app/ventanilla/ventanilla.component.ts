import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.css']
})
export class VentanillaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
