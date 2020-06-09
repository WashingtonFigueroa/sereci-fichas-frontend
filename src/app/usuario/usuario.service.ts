import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import * as variables from '../const';
import {User} from '../models/user';

@Injectable()
export class UsuarioService {
    headers = new Headers();
    base: string = variables.base;
    user = null;
    token = null;

    constructor(private http: Http, private router: Router) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.token);
        if (this.user == null) {
            router.navigate(['/']);
        }
    }

    index() {
        return this.http.get(this.base + 'usuarios', {headers: this.headers})
            .map(res => res.json().map(item => item));
    }

    show(id) {
        return this.http.get(this.base + 'usuarios/' + id, {headers: this.headers}).map(res => res.json());
    }

    store(data) {
        return this.http.post(this.base + 'usuarios', JSON.stringify(data), {headers: this.headers}).map(res => res.json());
    }

    update(data) {
        return this.http.put(this.base + 'usuarios/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res => res.json());
    }

    destroy(id) {
        return this.http.delete(this.base + 'usuarios/' + id, {headers: this.headers}).map(res => res.json());
    }

    autenticar(data) {
        return this.http.post(this.base + 'autenticar', JSON.stringify(data), {headers: this.headers})
            .map(res => {
                this.user = res.json().usuario;
                this.token = res.json().token;
                return res.json();
            });
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

    usuario() {
        return this.http.get(this.base + 'usuario', {headers: this.headers}).map(res => res.json());
    }

    activar(data) {
        return this.http.put(this.base + 'usuarios-activar/' + data.id, JSON.stringify(data), {headers: this.headers})
            .map(res => res.json());
    }

    desactivar(data) {
        return this.http.put(this.base + 'usuarios-desactivar/' + data.id, JSON.stringify(data), {headers: this.headers})
            .map(res => res.json());
    }

    administradoresUser() {
        return this.http.get(this.base + 'administradores-user', {headers: this.headers}).map(res => res.json().map(item => item));
    }

    comunicadoresUser() {
        return this.http.get(this.base + 'comunicadores-user', {headers: this.headers}).map(res => res.json().map(item => item));
    }

    cajerosUser() {
        return this.http.get(this.base + 'cajeros-user', {headers: this.headers}).map(res => res.json().map(item => item));
    }

    administradores() {
        return this.http.get(this.base + 'administradores', {headers: this.headers}).map(res => res.json().map(item => item));
    }

    comunicadores() {
        return this.http.get(this.base + 'comunicadores', {headers: this.headers}).map(res => res.json().map(item => item));
    }

    cajeros() {
        return this.http.get(this.base + 'cajeros', {headers: this.headers}).map(res => res.json().map(item => item));
    }

    getToken() {
        return this.token;
    }

    getUser(): User {
        return this.user;
    }
}
