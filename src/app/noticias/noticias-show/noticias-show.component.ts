import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-noticias-show',
  templateUrl: './noticias-show.component.html',
  styleUrls: ['./noticias-show.component.css']
})
export class NoticiasShowComponent implements OnInit {
  @Input() noticia:any;
  @Output() destroyNoticia = new EventEmitter<any>();


  toggle:boolean = false;
  constructor(private noticiasService:NoticiasService ) {
  }

  ngOnInit() {
    console.log(this.noticia);
  }
  update(){
      this.noticiasService.update(this.noticia).subscribe(res=>{
          console.log(res);
          this.toggle = false;
      });
  }
  destroy(){
      this.noticiasService.destroy(this.noticia.id).subscribe(res => {
          console.log(res);
          this.destroyNoticia.emit(this.noticia);
      });
  }
}
