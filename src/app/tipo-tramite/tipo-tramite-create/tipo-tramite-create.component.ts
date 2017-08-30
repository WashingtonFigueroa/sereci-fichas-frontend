import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TipoTramiteService} from '../tipo-tramite.service';

@Component({
  selector: 'app-tipo-tramite-create',
  templateUrl: './tipo-tramite-create.component.html',
  styleUrls: ['./tipo-tramite-create.component.css']
})
export class TipoTramiteCreateComponent implements OnInit {

    tipoTramiteGroup: FormGroup;
    constructor(private tipoTramiteService:TipoTramiteService) {}

    ngOnInit() {
        this.tipoTramiteGroup = new FormGroup({
            'nombre' : new FormControl(null, [Validators.required]),
            'descripcion' : new FormControl(null, [Validators.required])
        });
    }
    store(){
        let data = {
            'nombre' : this.tipoTramiteGroup.value.nombre,
            'descripcion' : this.tipoTramiteGroup.value.descripcion
        };
        this.tipoTramiteService.store(data).subscribe(res=>{
            this.tipoTramiteGroup.reset();
        });
    }
}
