import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class CategoriaService {
    headers = new Headers();
    base:string = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index(){
        return this.http.get(this.base + 'categorias', {headers: this.headers}).map(res=>res.json().map(item=>item));
    }
    show(id){
        return this.http.get(this.base + 'categorias/'+id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'categorias', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'categorias/'+data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'categorias/'+id, {headers: this.headers}).map(res=>res.json());
    }
}