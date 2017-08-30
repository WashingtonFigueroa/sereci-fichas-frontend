import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TipoTramiteService} from '../tipo-tramite.service';

@Component({
  selector: 'app-tipo-tramite-show',
  templateUrl: './tipo-tramite-show.component.html',
  styleUrls: ['./tipo-tramite-show.component.css']
})
export class TipoTramiteShowComponent implements OnInit {
    @Input() tipo_tramite:any;
    @Output() destroyTipoTramite = new EventEmitter<any>();


    toggle:boolean = false;
    constructor(private tipoTramiteService:TipoTramiteService ) {
        console.log(this.tipo_tramite);
    }

    ngOnInit() {
        console.log(this.tipo_tramite);
    }
    update(){
        this.tipoTramiteService.update(this.tipo_tramite).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.tipoTramiteService.destroy(this.tipo_tramite.id).subscribe(res => {
            console.log(res);
            this.destroyTipoTramite.emit(this.tipo_tramite);
        });
    }
}
