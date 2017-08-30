import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriaTramiteService} from '../categoria-tramite.service';

@Component({
  selector: 'app-categoria-tramite-show',
  templateUrl: './categoria-tramite-show.component.html',
  styleUrls: ['./categoria-tramite-show.component.css']
})
export class CategoriaTramiteShowComponent implements OnInit {
    @Input() categoria_tramite:any;
    @Output() destroyCategoriaTramite = new EventEmitter<any>();


    toggle:boolean = false;
    constructor(private categoriaTramiteService:CategoriaTramiteService) {
    }

    ngOnInit() {
        console.log(this.categoria_tramite);
    }
    update(){
        this.categoriaTramiteService.update(this.categoria_tramite).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.categoriaTramiteService.destroy(this.categoria_tramite.id).subscribe(res => {
            console.log(res);
            this.destroyCategoriaTramite.emit(this.categoria_tramite);
        });
    }
}
