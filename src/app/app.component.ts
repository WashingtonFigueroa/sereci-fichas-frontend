import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    token:any = null;
    constructor(private router:Router, private usuarioService: UsuarioService){
        this.token = localStorage.getItem('token');
        console.log(this.token);
    }
    logout(){
        this.usuarioService.logout();
    }
}
