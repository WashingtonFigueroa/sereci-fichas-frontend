import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-index',
  templateUrl: './usuario-index.component.html',
  styleUrls: ['./usuario-index.component.css']
})
export class UsuarioIndexComponent implements OnInit {
    usuarios: any[];
    tipo: any;
    constructor(private usuarioService:UsuarioService) {}

    ngOnInit() {
        this.usuarioService.index()
            .subscribe(res => this.usuarios = res);
    }
    onDelete(usuario){
        const index = this.usuarios.findIndex((usuarioEl)=>{
            return usuarioEl.id == usuario.id;
        });
        this.usuarios.splice(index, 1);
    }
    onChange(){
        switch(this.tipo){
            case 'usuario':
                this.usuarioService.index().subscribe(res=>this.usuarios = res);
                break;
            case 'administrador':
                this.usuarioService.administradoresUser().subscribe(res=>this.usuarios = res);
                break;
            case 'comunicador':
                this.usuarioService.comunicadoresUser().subscribe(res=>this.usuarios = res);
                break;
            case 'cajero':
                this.usuarioService.cajerosUser().subscribe(res=>this.usuarios = res);
                break;
        }
    }

}
