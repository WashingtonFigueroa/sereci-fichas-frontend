import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from './usuario/usuario.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    token: any = null;

    constructor(public router: Router, protected usuarioService: UsuarioService) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
    }

    logout() {
        this.usuarioService.logout();
    }
}
