import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class InscritoService {

    headers = new Headers();
    base:string  = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }
    buscar(data){
        return this.http.post(this.base + 'inscrito-buscar', JSON.stringify(data), {headers: this.headers})
            .map(res => res.json());;
    }
    index(){
        return this.http.get(this.base + 'inscritos', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id){
        return this.http.get(this.base + 'inscritos/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'inscritos', JSON.stringify(data), {headers: this.headers}).map(res => res.json());
    }

}
