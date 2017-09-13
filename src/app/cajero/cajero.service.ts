import { Injectable } from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Http, Headers} from '@angular/http';
import * as variables from '../const';
@Injectable()
export class CajeroService {
    headers = new Headers();
    base: string  = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index(){
        return this.http.get(this.base + 'cajeros', { headers: this.headers })
                        .map(res => res.json().map(data => data));
    }
    show(id){
        return this.http.get(this.base + 'cajeros/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'cajeros', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'cajeros/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'cajeros/'+id, {headers: this.headers}).map(res=>res.json());
    }
    getAsignacionVentanillas() {
        return this.http.get(this.base + 'get-asignacion-ventanillas', {headers: this.headers})
                        .map( res => res.json().map( data => data));
    }
}
