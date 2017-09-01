import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticuloService} from '../articulo.service';
import {NormativaService} from '../../normativa/normativa.service';

@Component({
  selector: 'app-articulo-show',
  templateUrl: './articulo-show.component.html',
  styleUrls: ['./articulo-show.component.css']
})
export class ArticuloShowComponent implements OnInit {
    @Input() articulo:any;
    @Output() destroyArticulo = new EventEmitter<any>();

    toggle:boolean = false;
    constructor(private articuloService: ArticuloService) {
    }

    ngOnInit() {
        console.log(this.articulo);
    }
    update(){
        this.articuloService.update(this.articulo).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.articuloService.destroy(this.articulo.id).subscribe(res => {
            console.log(res);
            this.destroyArticulo.emit(this.articulo);
        });
    }
}
