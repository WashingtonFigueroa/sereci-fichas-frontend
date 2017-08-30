import { Component, OnInit } from '@angular/core';
import {TipoTramiteService} from '../tipo-tramite.service';

@Component({
  selector: 'app-tipo-tramite-index',
  templateUrl: './tipo-tramite-index.component.html',
  styleUrls: ['./tipo-tramite-index.component.css']
})
export class TipoTramiteIndexComponent implements OnInit {
    tipo_tramites: any;
    constructor(private tipoTramiteService:TipoTramiteService) {}

    ngOnInit() {
        this.tipoTramiteService.index()
            .subscribe(res => this.tipo_tramites = res);
    }
    onDelete(tipo_tramite){
        const index = this.tipo_tramites.findIndex((tipo_tramiteEl)=>{
            return tipo_tramiteEl.id == tipo_tramite.id;
        });
        this.tipo_tramites.splice(index, 1);
    }
}
