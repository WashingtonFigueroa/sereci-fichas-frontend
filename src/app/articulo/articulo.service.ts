import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as variables from '../const';
@Injectable()
export class ArticuloService {
    headers = new Headers();
    base:string  = variables.base;
    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    index(){
        return this.http.get(this.base + 'articulos', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id){
        return this.http.get(this.base + 'articulos/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'articulos', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'articulos/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'articulos/'+id, {headers: this.headers}).map(res=>res.json());
    }
}
