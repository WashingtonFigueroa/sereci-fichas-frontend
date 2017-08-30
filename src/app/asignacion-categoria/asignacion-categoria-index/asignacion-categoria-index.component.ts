import { Component, OnInit } from '@angular/core';
import {AsignacionCategoriaService} from '../asignacion-categoria.service';

@Component({
  selector: 'app-asignacion-categoria-index',
  templateUrl: './asignacion-categoria-index.component.html',
  styleUrls: ['./asignacion-categoria-index.component.css']
})
export class AsignacionCategoriaIndexComponent implements OnInit {
    asignacion_categorias: any;
    constructor(private asignacionCategoriaService:AsignacionCategoriaService) {}

    ngOnInit() {
        this.asignacionCategoriaService.index()
            .subscribe(res => this.asignacion_categorias = res);
    }
    onDelete(asignacion_categoria){
        const index = this.asignacion_categorias.findIndex((asignacion_categoriaEl)=>{
            return asignacion_categoriaEl.id == asignacion_categoria.id;
        });
        this.asignacion_categorias.splice(index, 1);
    }
}
