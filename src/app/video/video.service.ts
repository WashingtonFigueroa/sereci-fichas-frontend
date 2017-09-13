import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UsuarioService} from '../usuario/usuario.service';
import * as variables from '../const';
@Injectable()
export class VideoService {
    headers = new Headers();
    base: string  = variables.base;
    video: string = variables.videos;
    constructor(private http: Http, private usuarioService: UsuarioService) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + usuarioService.getToken());
    }
    videoIds(){
        return this.http.get(this.base + 'video-ids', {headers: this.headers})
                            .map(res => res.json().map( data => {
                                return { file: this.video + data.id};
                            }));
    }
    index(){
        return this.http.get(this.base + 'videos', {headers: this.headers}).map(res=>res.json().map(data=>data));
    }
    show(id){
        return this.http.get(this.base + 'videos/' + id, {headers: this.headers}).map(res=>res.json());
    }
    store(data){
        return this.http.post(this.base + 'videos', JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    update(data){
        return this.http.put(this.base + 'videos/' + data.id, JSON.stringify(data), {headers: this.headers}).map(res=>res.json());
    }
    destroy(id){
        return this.http.delete(this.base + 'videos/'+id, {headers: this.headers}).map(res=>res.json());
    }
}