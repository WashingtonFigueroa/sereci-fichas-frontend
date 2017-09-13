import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as variables from '../const';
import {UsuarioService} from '../usuario/usuario.service';
@Injectable()
export class SolicitanteService {
    headers = new Headers();
    base:string  = variables.base;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }

    buscar(data){
      return this.http.post(this.base + 'solicitante-buscar', JSON.stringify(data), {headers: this.headers})
                      .map(res => res.json());;
    }

    index(){
        return this.http.get(this.base + 'solicitantes', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    store(data){
        return this.http.post(this.base + 'solicitantes', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }

}
