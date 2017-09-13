import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class SolicitudAutorizacionService {
    headers = new Headers();
    base: string  = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index() {
        return this.http.get(this.base + 'solicitud-autorizaciones', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id) {
        return this.http.get(this.base + 'solicitud-autorizaciones/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data) {
        return this.http.post(this.base + 'solicitud-autorizaciones', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data) {
        return this.http.put(this.base + 'solicitud-autorizaciones/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id) {
        return this.http.delete(this.base + 'solicitud-autorizaciones/' + id, {headers: this.headers}).map(res=>res.json());
    }
}
