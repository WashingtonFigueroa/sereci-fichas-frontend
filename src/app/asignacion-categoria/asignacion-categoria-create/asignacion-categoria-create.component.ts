import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriaService} from '../../categoria/categoria.service';
import {VentanillaService} from '../../ventanilla/ventanilla.service';
import {AsignacionCategoriaService} from '../asignacion-categoria.service';

@Component({
  selector: 'app-asignacion-categoria-create',
  templateUrl: './asignacion-categoria-create.component.html',
  styleUrls: ['./asignacion-categoria-create.component.css']
})
export class AsignacionCategoriaCreateComponent implements OnInit {
    categorias:any[];
    ventanillas:any[];
    asignacionCategoriaGroup: FormGroup;
    constructor(private categoriaService: CategoriaService,
                private ventanillaService: VentanillaService,
                private asignacionCategoriaService: AsignacionCategoriaService) {

        this.categoriaService.index().subscribe(res=>this.categorias = res);
        this.ventanillaService.index().subscribe(res=>this.ventanillas = res);
    }

    ngOnInit() {
        this.asignacionCategoriaGroup = new FormGroup({
            'categoria_id': new FormControl(null, [Validators.required]),
            'ventanilla_id': new FormControl(null, [Validators.required])
        });
    }
    store(){
        let data = {
            'categoria_id' : this.asignacionCategoriaGroup.value.categoria_id,
            'ventanilla_id' : this.asignacionCategoriaGroup.value.ventanilla_id
        };
        this.asignacionCategoriaService.store(data).subscribe(res=>{
            this.asignacionCategoriaGroup.reset();
        });
    }
}
