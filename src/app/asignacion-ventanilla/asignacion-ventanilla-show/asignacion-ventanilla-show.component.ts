import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AsignacionVentanillaService} from '../asignacion-ventanilla.service';

@Component({
  selector: 'app-asignacion-ventanilla-show',
  templateUrl: './asignacion-ventanilla-show.component.html',
  styleUrls: ['./asignacion-ventanilla-show.component.css']
})
export class AsignacionVentanillaShowComponent implements OnInit {
    @Input() asignacion_ventanilla:any;
    @Output() destroyAsignacionVentanilla = new EventEmitter<any>();

    toggle:boolean = false;
    constructor(private asignacionVentanillaService:AsignacionVentanillaService) {
    }

    ngOnInit() {
        console.log(this.asignacion_ventanilla);
    }
    update(){
        this.asignacionVentanillaService.update(this.asignacion_ventanilla).subscribe(res=>{
            this.asignacion_ventanilla = res;
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.asignacionVentanillaService.destroy(this.asignacion_ventanilla.id).subscribe(res => {
            this.destroyAsignacionVentanilla.emit(this.asignacion_ventanilla);
        });
    }
}
