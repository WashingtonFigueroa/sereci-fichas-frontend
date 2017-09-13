import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-noticias-index',
  templateUrl: './noticias-index.component.html',
  styleUrls: ['./noticias-index.component.css']
})
export class NoticiasIndexComponent implements OnInit {
    noticias: any;
    loading = false;
    constructor(private noticiasService: NoticiasService) {}

    ngOnInit() {
        this.noticiasService.index()
            .subscribe(noticias => {
                this.noticias = noticias;
                this.loading = true;
            });
    }
    onDeleted(noticia){
        const index = this.noticias.findIndex((noticiaEl)=>{
            return noticiaEl.id == noticia.id;
        });
        this.noticias.splice(index, 1);
    }
}