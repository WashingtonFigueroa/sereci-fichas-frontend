import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as variables from '../const';
import 'rxjs/add/operator/map';
@Injectable()
export class NoticiasService {
    headers = new Headers();
    base:string  = variables.base;
    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    index(){
        return this.http.get(this.base + 'noticias', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id){
        return this.http.get(this.base + 'noticias/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'noticias', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'noticias/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'noticias/'+id, {headers: this.headers}).map(res=>res.json());
    }
    noticiasHabilitadas(){
        return this.http.get(this.base + 'noticias-habilitadas', {headers: this.headers})
            .map(res => res.json().map(record => record));
    }
}