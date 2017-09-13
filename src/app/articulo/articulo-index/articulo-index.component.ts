import { Component, OnInit } from '@angular/core';
import {ArticuloService} from '../articulo.service';

@Component({
  selector: 'app-articulo-index',
  templateUrl: './articulo-index.component.html',
  styleUrls: ['./articulo-index.component.css']
})
export class ArticuloIndexComponent implements OnInit {
    articulos: any;
    loading = false;
    constructor(private articuloService: ArticuloService) {}

    ngOnInit() {
        this.articuloService.index()
            .subscribe(res => {
                this.articulos = res;
                this.loading = true;
            });
    }
    onDelete(articulo){
        const index = this.articulos.findIndex((articuloEl)=>{
            return articuloEl.id == articulo.id;
        });
        this.articulos.splice(index, 1);
    }
}
