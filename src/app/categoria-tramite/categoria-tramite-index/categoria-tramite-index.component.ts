import { Component, OnInit } from '@angular/core';
import {CategoriaTramiteService} from '../categoria-tramite.service';

@Component({
  selector: 'app-categoria-tramite-index',
  templateUrl: './categoria-tramite-index.component.html',
  styleUrls: ['./categoria-tramite-index.component.css']
})
export class CategoriaTramiteIndexComponent implements OnInit {
    categoria_tramites: any;
    loading = false;
    constructor(private categoriaTramiteService: CategoriaTramiteService) {}

    ngOnInit() {
        this.categoriaTramiteService.index()
            .subscribe(res => {
                this.categoria_tramites = res;
                this.loading = true;
            });
    }
    onDelete(categoria_tramite){
        const index = this.categoria_tramites.findIndex((categoria_tramiteEl)=>{
            return categoria_tramiteEl.id == categoria_tramite.id;
        });
        this.categoria_tramites.splice(index, 1);
    }
}
