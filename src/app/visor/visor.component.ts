import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../noticias/noticias.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

    noticias: string = '';
    fichas:any = [
      { 'numero': 'TL-45', 'caja':'CAJA 1'},
      { 'numero': 'TL-46', 'caja':'CAJA 2'},
      { 'numero': 'TL-47', 'caja':'CAJA 3'},
      { 'numero': 'TL-48', 'caja':'CAJA 4'},
      { 'numero': 'TL-49', 'caja':'CAJA 5'},
      { 'numero': 'TL-50', 'caja':'CAJA 6'},
    ];
  constructor(private noticiasService: NoticiasService) {
      noticiasService.noticiasHabilitadas()
          .subscribe(res => {
              const noticias = res;
              console.log(res);
              noticias.forEach(noticia=>this.noticias+=noticia.descripcion+' ');
          });
  }

  ngOnInit() {
  }

}
