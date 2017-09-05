import { Component, OnInit } from '@angular/core';
import {FichaService} from '../ficha/ficha.service';
import {MensajeDialogComponent} from '../mensaje-dialog/mensaje-dialog.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent implements OnInit {

  estado = 'atendido';
  response: any;
  constructor(private fichaService: FichaService, public dialog: MdDialog) { }

  ngOnInit() {
  }
  llamarFicha(){
    this.fichaService.llamarFicha().subscribe(res => {
        if (res.error) {
            const dialogRef = this.dialog.open(MensajeDialogComponent, {
                width: '400px',
                height: '125px',
                data: { mensaje: res.error }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                console.log(result);
            });
        }

        console.log(res);
    });
  }



}
