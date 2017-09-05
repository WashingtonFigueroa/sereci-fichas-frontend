import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import * as variables from '../const';
@Injectable()
export class VideoUploadService {
    headers = new Headers();
    headers2 = new Headers();
    base: string  = variables.base;
    video: string = variables.videos;
    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        this.headers2.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        this.headers2.delete('Content-Type');
    }

    index(){
        return this.http.get(this.base + 'videos', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id){
        return this.http.get(this.base + 'videos/' + id, {headers: this.headers}).map(res => res.json());
    }
    store(formData){
        return this.http.request('http://localhost:8000/api/videos', new RequestOptions({
            method: RequestMethod.Post,
            body: formData,
            headers: this.headers2
        })).map(res => res.json());
    }
    update(data){
        return this.http.put(this.base + 'videos/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'videos/' + id, {headers: this.headers}).map(res=>res.json());
    }
}
