import {Component, OnInit} from '@angular/core';
import {NoticiasService} from '../noticias/noticias.service';
import {VisorService} from './visor.service';
import * as variables from '../const';
import {zip} from 'rxjs/observable/zip';
import {from} from 'rxjs/observable/from';
import {timer} from 'rxjs/observable/timer';

@Component({
    selector: 'app-visor',
    templateUrl: './visor.component.html',
    styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

    noticias: string = '';
    fichas: {
        numero: string,
        ventanilla: string
    }[] = [];

    abecedario = variables.abecedario;

    constructor(private noticiasService: NoticiasService,
                private visorService: VisorService) {
        let espacios = '';
        for (let i = 0; i < 45; i++) {
            espacios += '&nbsp;';
        }
        noticiasService.noticiasHabilitadas()
            .subscribe((noticias: any[]) => {
                noticias.map((noticia: any) => {
                    this.noticias += `${noticia.descripcion}${espacios}`;
                });
            });
    }

    ngOnInit() {
        let llamado = '';
        this.visorService.reLlamar()
            .subscribe((data: { numero: string, ventanilla: string }) => {
                let index = -1;
                let i = 0;
                this.fichas.map((ficha) => {
                    if (ficha.numero === data.numero) {
                        index = i;
                    }
                    i++;
                });
                if (index !== -1) {
                    this.fichas.splice(index, 1);
                }
                this.fichas.unshift(data);

                let parse = data.numero.toLowerCase().split('-')[0] + data.numero.toLowerCase().split('-')[1];
                let letrasArray = [];
                parse.split('').map((letra) => {
                    letrasArray.push(letra);
                });
                letrasArray.push('a ventanilla');
                let parseVentanilla = data.ventanilla.toLowerCase().split('');
                parseVentanilla.map((letra) => {
                    letrasArray.push(letra);
                });

                const observer = {
                    next: letra => this.playAudio(letra),
                    complete: () => console.log('complete')
                };

                const source$ = zip(
                    from(letrasArray),
                    timer(0, 1200),
                    (val, i) => val
                );
                source$.subscribe(observer);
                if (this.fichas.length > 5) {
                    this.fichas.splice(this.fichas.length - 1, 1);
                }
                console.log(data);
            });
    }

    playAudio(letra: string) {
        console.log('playAudio: ', letra)
        let audio = new Audio();
        audio.src = `${this.abecedario}${letra}`;
        audio.load();
        audio.play();
    }
}
