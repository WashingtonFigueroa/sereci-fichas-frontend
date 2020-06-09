import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';

@Injectable()
export class TramiteService {
    headers = new Headers();
    base: string = variables.base;

    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index() {
        return this.http.get(this.base + 'tramites', {headers: this.headers}).map(res => res.json().map(data => data));
    }

    show(id) {
        return this.http.get(this.base + 'tramites/' + id, {headers: this.headers}).map(res => res.json());
    }

    store(data) {
        return this.http.post(this.base + 'tramites', JSON.stringify(data), {headers: this.headers}).map(res => res.json());
    }

    update(data) {
        return this.http.put(this.base + 'tramites/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res => res.json());
    }

    destroy(id) {
        return this.http.delete(this.base + 'tramites/' + id, {headers: this.headers}).map(res => res.json());
    }

    miTramite() {
        return this.http.post(`${this.base}mi-tramite`, null, {headers: this.headers}).map(res => res.json());
    }

    finalizarTramite(data: {
        tramite_id: number
    }) {
        return this.http.post(`${this.base}finalizar-tramite`, data, {headers: this.headers}).map(res => res.json());
    }
}
