import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AsignacionCategoriaService} from '../asignacion-categoria.service';

@Component({
  selector: 'app-asignacion-categoria-show',
  templateUrl: './asignacion-categoria-show.component.html',
  styleUrls: ['./asignacion-categoria-show.component.css']
})
export class AsignacionCategoriaShowComponent implements OnInit {
    @Input() asignacion_categoria:any;
    @Output() destroyAsignacionCategoria = new EventEmitter<any>();

    constructor(private asignacionCategoriaService:AsignacionCategoriaService ) {
    }

    ngOnInit() {
        console.log(this.asignacion_categoria);
    }
    destroy(){
        this.asignacionCategoriaService.destroy(this.asignacion_categoria.id).subscribe(res => {
            this.destroyAsignacionCategoria.emit(this.asignacion_categoria);
        });
    }
}
