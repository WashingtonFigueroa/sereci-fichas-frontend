import {Component, OnInit} from '@angular/core';
import {CajeroService} from '../cajero/cajero.service';
import {FichaService} from '../ficha/ficha.service';
import {AsignacionVentanilla} from '../models/asignacion-ventanilla';
import {TramiteService} from '../tramite/tramite.service';
import {Tramite} from '../models/tramite';
import {environment} from '../../environments/environment.prod';
import {VisorService} from '../visor/visor.service';

@Component({
    selector: 'app-atencion-ventanilla',
    templateUrl: './atencion-ventanilla.component.html',
    styleUrls: ['./atencion-ventanilla.component.css']
})
export class AtencionVentanillaComponent implements OnInit {

    datos: {
        status: number,
        body: AsignacionVentanilla | null
    } = {
        status: 404,
        body: null
    };
    control: {
        status: number,
        body: Tramite | null
    } = {
        status: 404,
        body: null
    };

    fichas: {
        numero: string,
        ventanilla: string
    }[] = [];

    socketsURL = environment.sockets;

    constructor(private cajeroService: CajeroService,
                private tramiteService: TramiteService,
                private visorService: VisorService,
                private fichaService: FichaService) {
    }

    ngOnInit() {
        this.cajeroService.miVentanilla()
            .subscribe((datos: {
                status: number,
                body: AsignacionVentanilla | null
            }) => {
                this.datos = datos;
                if (datos.status === 200) {
                    console.log(datos);
                    this.miTramite();
                }
            });
    }

    onCall(data: {
        numero: string,
        ventanilla: string,
    }) {
        this.visorService.nuevaFicha(data);
    }

    miTramite() {
        if (this.datos.body !== null) {
            this.tramiteService.miTramite()
                .subscribe((response: {
                    status: number,
                    body: Tramite | null
                }) => {
                    console.log(response);
                    this.control = response;
                    if (response.body !== null) {
                        this.onCall({
                            numero: response.body.ficha.numero,
                            ventanilla: this.datos.body.ventanilla.numero
                        });
                    }
                });
        }
    }

    llamarFicha() {
        this.fichaService.llamarFicha(this.datos.body.ventanilla.id)
            .subscribe((response) => {
                console.log(response);
                if (response.error) {
                    alert(response.error);
                } else {
                    this.tramiteService.store({
                        ficha_id: response.id,
                        cajero_id: this.datos.body.cajero_id,
                    })
                        .subscribe((tramite: any) => {
                            this.miTramite();
                        });
                }
            });
    }

    finalizarTramite() {
        this.tramiteService.finalizarTramite({
            tramite_id: this.control.body.id
        }).subscribe(() => {
            this.miTramite();
        });
    }
}
