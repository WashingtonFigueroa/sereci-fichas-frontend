import { Component, OnInit } from '@angular/core';
import {FichaService} from '../ficha/ficha.service';
import {SolicitanteService} from '../solicitante/solicitante.service';
import {MensajeDialogComponent} from '../mensaje-dialog/mensaje-dialog.component';
import {MdDialog} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TipoTramiteService} from '../tipo-tramite/tipo-tramite.service';
import {CategoriaTramiteService} from '../categoria-tramite/categoria-tramite.service';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent implements OnInit {
    /*
    *  1 BUSQUEDA DE SOLICITANTE
    *  1.1 REGISTRO DE SOLICITANTE
    *  1.2 LISTAR SOLICITANTES MATCH
    *  2 SOLICITANTE SELECCIONADO
    *  3 SELECCIONAR TIPO TRAMITE Y CATEGORIA TRAMITE
    *
    * */
  estado = 'atendido';
  response: any;
  paso = 0;
  tipo_tramites: any[];
  categoria_tramites: any[] = null;
  tipo_tramite_id: any;
  categoria_tramite: any = null;

  tramite = {
    categoria_tramite_id: 0,
  };

    /*paso 1*/
    busqueda_solicitante: any;
    solicitantes: any[];
    busquedaSolicitanteGroup: FormGroup;
    solicitanteGroup: FormGroup;

    /*paso 2 */
    solicitante = {
        'nombres': '',
        'apellidos': '',
        'carnet': '',
        'celular': '',
    };
  constructor(private fichaService: FichaService,
              private solicitanteService: SolicitanteService,
              private categoriaTramiteService: CategoriaTramiteService,
              private tipoTramiteService: TipoTramiteService,
              public dialog: MdDialog) {

  }

  ngOnInit() {
      this.busquedaSolicitanteGroup = new FormGroup({
          'busqueda_solicitante': new FormControl(null, Validators.required)
      });

      this.solicitanteGroup = new FormGroup({
          'nombres': new FormControl(null, Validators.required),
          'apellidos': new FormControl(null, Validators.required),
          'carnet': new FormControl(null, Validators.required),
          'celular': new FormControl(null, Validators.required),
      });

      this.tipoTramiteService.index().subscribe(res => this.tipo_tramites = res);

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
        this.paso = 1;
        this.estado = 'ventanilla';
        console.log(res);
    });
  }
  buscar() {
      const data = {
          'busqueda_solicitante' : this.busquedaSolicitanteGroup.value.busqueda_solicitante
      };
      this.solicitanteService.buscar(data).subscribe(res => {
          if (res.error) {
              const dialogRef = this.dialog.open(MensajeDialogComponent, {
                  width: '400px',
                  height: '150px',
                  data: { mensaje: res.error }
              });
              dialogRef.afterClosed().subscribe(result => {
                  console.log('The dialog was closed');
                  console.log(result);
              });
              if (res.code === 404){
                    this.paso = 1.1;
              }
          }else{
              this.solicitantes = res;
              console.log(res);
              console.log('paso 1.2');
              this.paso = 1.2;
          }

      });
  }

  guardarSolicitante(){
      const data = {
          'nombres' : this.solicitanteGroup.value.nombres,
          'apellidos' : this.solicitanteGroup.value.apellidos,
          'carnet' : this.solicitanteGroup.value.carnet,
          'celular' : this.solicitanteGroup.value.celular
      };
      this.solicitanteService.store(data).subscribe(res => {
          const message = 'El solicitante ' + res.nombres.toUpperCase() + ' ' + res.apellidos.toUpperCase() +
                          ' has sido registrado exitosamente';
          this.solicitante = res;
          const dialogRef = this.dialog.open(MensajeDialogComponent, {
              width: '400px',
              height: '150px',
              data: { mensaje: message}
          });
          dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
              console.log(result);
          });
          this.paso = 2;
          this.solicitanteGroup.reset();
      });
  }

  seleccionarSolicitante(record){
    this.solicitante = record;
    this.paso = 2;
  }

  getCategoriaTramites(tipo_tramite_id){
      this.tipoTramiteService.getCategoriaTramites(tipo_tramite_id).subscribe( res => this.categoria_tramites = res );
  }
  seleccionarCategoriaTramite(categoria_tramite_id){
      this.categoriaTramiteService.show(categoria_tramite_id).subscribe(res => {
          console.log(res);
          this.categoria_tramite = res;
      });
  }
  irPaso3(){
      this.paso = 3;
  }
}
