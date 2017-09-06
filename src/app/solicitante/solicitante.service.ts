import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as variables from '../const';
@Injectable()
export class SolicitanteService {
    headers = new Headers();
    base:string  = variables.base;
    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
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
