import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import * as io from 'socket.io-client';

@Injectable()
export class VisorService {
    socketURL = environment.sockets;
    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io(this.socketURL);
    }


    nuevaFicha(ficha) {
        this.socket.emit('nuevaFicha', ficha);
    }

    reLlamar() {
        return Observable.create((observer) => {
            this.socket.on('rellamar', (ficha) => {
                console.log(ficha);
                observer.next(ficha);
            });
        });
    }

    saludo() {
        return Observable.create((observer) => {
            this.socket.on('saludo', (response) => {
                console.log(response);
                observer.next(response);
            });
        });
    }

}
