import { Component, OnInit } from '@angular/core';
import {AsignacionVentanillaService} from '../asignacion-ventanilla.service';

@Component({
  selector: 'app-asignacion-ventanilla-index',
  templateUrl: './asignacion-ventanilla-index.component.html',
  styleUrls: ['./asignacion-ventanilla-index.component.css']
})
export class AsignacionVentanillaIndexComponent implements OnInit {
    asignacion_ventanillas: any;
    loading = false;
    constructor(private asignacionVentanillaService:AsignacionVentanillaService) {}

    ngOnInit() {
        this.asignacionVentanillaService.index()
            .subscribe(res => {
                this.asignacion_ventanillas = res;
                this.loading = true;
            });
    }
    onDelete(asignacion_ventanilla){
        const index = this.asignacion_ventanillas.findIndex((asignacion_ventanillaEl)=>{
            return asignacion_ventanillaEl.id == asignacion_ventanilla.id;
        });
        this.asignacion_ventanillas.splice(index, 1);
    }
}
