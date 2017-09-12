import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = null;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.usuario().subscribe(res => {
        this.usuario = res;
        console.log(res);
    });
  }

}
