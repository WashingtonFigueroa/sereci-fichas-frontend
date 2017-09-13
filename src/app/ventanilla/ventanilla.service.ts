import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class VentanillaService {
    headers = new Headers();
    base:string = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index(){
        return this.http.get(this.base + 'ventanillas', {headers: this.headers}).map(res=>res.json().map(item=>item));
    }
    show(id){
        return this.http.get(this.base + 'ventanillas/'+id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'ventanillas', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'ventanillas/'+data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'ventanillas/'+id, {headers: this.headers}).map(res=>res.json());
    }
}
