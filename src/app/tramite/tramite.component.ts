import { Component, OnInit } from '@angular/core';
import {FichaService} from '../ficha/ficha.service';
import {SolicitanteService} from '../solicitante/solicitante.service';
import {MensajeDialogComponent} from '../mensaje-dialog/mensaje-dialog.component';
import {MdDialog} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TipoTramiteService} from '../tipo-tramite/tipo-tramite.service';
import {CategoriaTramiteService} from '../categoria-tramite/categoria-tramite.service';
import {InscritoService} from '../inscrito/inscrito.service';

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
  ficha: any = null;

  tramite = {
      'ficha_id': 0,
      'categoria_tramite_id': 0,
      'inscrito_id': 0,
      'solicitud_autorizacion' : {
          'rectificiacion': false,
          'complementacion': false,
          'ratificacion': false,
          'cambio': false,
          'cancelacion': false,
          'reposicion': false,
          'traspaso': false
      },
      'con_prueba': false,
      'glosa': '',
  };

    /*paso 1*/
    busqueda_solicitante: any;
    solicitantes: any[];
    busquedaSolicitanteGroup: FormGroup;
    solicitanteGroup: FormGroup;
    inscritoGroup: FormGroup;

    /*paso 2 */
    solicitante = {
        'nombres': '',
        'apellidos': '',
        'carnet': '',
        'celular': '',
    };

    /*paso 3*/
    busquedaInscritoGroup: FormGroup;
    inscritos: any[];
    inscrito = {
      'nombres': '',
      'apellidos': '',
    };
    /*paso 4*/
  constructor(private fichaService: FichaService,
              private solicitanteService: SolicitanteService,
              private categoriaTramiteService: CategoriaTramiteService,
              private tipoTramiteService: TipoTramiteService,
              private inscritoService: InscritoService,
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

      this.busquedaInscritoGroup = new FormGroup({
          'busqueda_inscrito': new FormControl(null, Validators.required)
      });
      this.inscritoGroup = new FormGroup({
          'nombres' : new FormControl(null, Validators.required),
          'apellidos' : new FormControl(null, Validators.required)
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
            this.paso = 0;
        }else{
            this.paso = 1;
            this.ficha = res;
            this.tramite.ficha_id = res.id;
            this.estado = 'ventanilla';
        }
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

  buscarInscrito() {
      const data = {
          'busqueda_inscrito' : this.busquedaInscritoGroup.value.busqueda_inscrito
      };
      this.inscritoService.buscar(data).subscribe(res => {
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
                  this.paso = 3.1; // obs
              }
          }else{
              this.inscritos = res;
              console.log(res);
              console.log('paso 3.2'); // listar inscritos
              this.paso = 3.2;
          }
      });
  }

  guardarInscrito() {
        const data = {
            'nombres' : this.inscritoGroup.value.nombres,
            'apellidos' : this.inscritoGroup.value.apellidos,
        };
        this.inscritoService.store(data).subscribe(res => {
            const message = 'El inscrito ' + res.nombres.toUpperCase() + ' ' + res.apellidos.toUpperCase() +
                ' ha sido registrado exitosamente';
            this.inscrito = res;
            this.tramite.inscrito_id = res.id;
            const dialogRef = this.dialog.open(MensajeDialogComponent, {
                width: '400px',
                height: '150px',
                data: { mensaje: message}
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                console.log(result);
            });
            this.paso = 4; // obs
            this.inscritoGroup.reset();
        });
    }

  seleccionarInscrito(record){
    this.inscrito = record;
    this.paso = 4; // obs
  }

}
