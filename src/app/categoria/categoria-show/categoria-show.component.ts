import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-categoria-show',
  templateUrl: './categoria-show.component.html',
  styleUrls: ['./categoria-show.component.css']
})
export class CategoriaShowComponent implements OnInit {

    @Input() categoria:any;
    @Output() destroyCategoria = new EventEmitter<any>();


    toggle:boolean = false;
    constructor(private categoriaService:CategoriaService) {
    }

    ngOnInit() {
        console.log(this.categoria);
    }
    update(){
        this.categoriaService.update(this.categoria).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.categoriaService.destroy(this.categoria.id).subscribe(res => {
            console.log(res);
            this.destroyCategoria.emit(this.categoria);
        });
    }
}
