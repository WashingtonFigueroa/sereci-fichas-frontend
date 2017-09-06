import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as variables from '../const';
@Injectable()
export class TipoTramiteService {
    headers = new Headers();
    base:string = variables.base;
    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    index(){
        return this.http.get(this.base + 'tipo-tramites', {headers: this.headers}).map(res=>res.json().map(item=>item));
    }
    show(id){
        return this.http.get(this.base + 'tipo-tramites/'+id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'tipo-tramites', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'tipo-tramites/'+data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'tipo-tramites/'+id, {headers: this.headers}).map(res=>res.json());
    }
    getCategoriaTramites(tipo_tramite_id){
        return this.http.get(this.base + 'get-categoria-tramites/' + tipo_tramite_id, {headers: this.headers}).map(res=>res.json().map(item=>item));
    }
}
