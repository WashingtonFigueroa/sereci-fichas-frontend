import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-categoria-index',
  templateUrl: './categoria-index.component.html',
  styleUrls: ['./categoria-index.component.css']
})
export class CategoriaIndexComponent implements OnInit {
    categorias: any;
    constructor(private categoriaService: CategoriaService) {
        categoriaService.index().subscribe(res=>{
            this.categorias = res;
        });
    }

    ngOnInit() {

    }
    onDeleted(categoria){
        const index = this.categorias.findIndex((categoriaEl)=>{
            return categoriaEl.id == categoria.id;
        });
        this.categorias.splice(index, 1);
    }
}
