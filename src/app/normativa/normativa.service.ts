import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class NormativaService {
    headers = new Headers();
    base:string = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    index(){
        return this.http.get(this.base + 'normativas', {headers: this.headers}).map(res=>res.json().map(item=>item));
    }
    show(id){
        return this.http.get(this.base + 'normativas/'+id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'normativas', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'normativas/'+data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'normativas/'+id, {headers: this.headers}).map(res=>res.json());
    }
}
