import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriaTramiteService} from '../categoria-tramite.service';
import {TipoTramiteService} from '../../tipo-tramite/tipo-tramite.service';

@Component({
  selector: 'app-categoria-tramite-create',
  templateUrl: './categoria-tramite-create.component.html',
  styleUrls: ['./categoria-tramite-create.component.css']
})
export class CategoriaTramiteCreateComponent implements OnInit {
    categoriaTramiteGroup: FormGroup;
    tipo_tramites: any[];
    constructor(private categoriaTramiteService:CategoriaTramiteService,
                private tipoTramiteService: TipoTramiteService) {}

    ngOnInit() {
        this.tipoTramiteService.index().subscribe(res=>this.tipo_tramites = res);
        this.categoriaTramiteGroup = new FormGroup({
            'tipo_tramite_id' : new FormControl(null, [Validators.required]),
            'descripcion' : new FormControl(null, [Validators.required]),
            'duracion_horas' : new FormControl(null, [  Validators.required,
                                                        Validators.min(0),
                                                        Validators.max(72)]),
        });
        console.log(this.categoriaTramiteGroup);
    }
    store(){
        let data = {
            'tipo_tramite_id' : this.categoriaTramiteGroup.value.tipo_tramite_id,
            'descripcion' : this.categoriaTramiteGroup.value.descripcion,
            'duracion_horas' : this.categoriaTramiteGroup.value.duracion_horas
        };
        this.categoriaTramiteService.store(data).subscribe(res=>{
            this.categoriaTramiteGroup.reset();
        });
    }
}
