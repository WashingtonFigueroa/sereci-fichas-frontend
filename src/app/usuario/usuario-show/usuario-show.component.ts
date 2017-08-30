import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.css']
})
export class UsuarioShowComponent implements OnInit {
    @Input() usuario:any;
    @Output() destroyUsuario = new EventEmitter<any>();


    toggle:boolean = false;
    constructor(private usuarioService:UsuarioService) {
    }

    ngOnInit() {
        console.log(this.usuario);
    }
    update(){
        this.usuarioService.update(this.usuario).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    desactivar(){
        this.usuarioService.desactivar(this.usuario).subscribe(res => {
            this.usuario.activo = false;
            console.log(res);
   //         this.destroyUsuario.emit(this.usuario);
        });
    }
    activar(){
        this.usuarioService.activar(this.usuario).subscribe(res => {
            this.usuario.activo = true;
            console.log(res);
 //           this.destroyUsuario.emit(this.usuario);
        });
    }
}
