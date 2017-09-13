import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AsignacionVentanillaService} from '../asignacion-ventanilla.service';
import {UsuarioService} from '../../usuario/usuario.service';
import {VentanillaService} from '../../ventanilla/ventanilla.service';

@Component({
  selector: 'app-asignacion-ventanilla-create',
  templateUrl: './asignacion-ventanilla-create.component.html',
  styleUrls: ['./asignacion-ventanilla-create.component.css']
})
export class AsignacionVentanillaCreateComponent implements OnInit {
    cajeros:any[];
    ventanillas:any[];
    asignacionVentanillaGroup: FormGroup;
    constructor(private usuarioService: UsuarioService,
                private ventanillaService: VentanillaService,
                private asignacionVentanillaService: AsignacionVentanillaService) {

        this.usuarioService.cajeros().subscribe(res => this.cajeros = res);
        this.ventanillaService.index().subscribe(res => this.ventanillas = res);
    }

    ngOnInit() {
        this.asignacionVentanillaGroup = new FormGroup({
            'cajero_id': new FormControl(null, [Validators.required]),
            'ventanilla_id': new FormControl(null, [Validators.required])
        });
    }
    store(){
        let data = {
            'cajero_id' : this.asignacionVentanillaGroup.value.cajero_id,
            'ventanilla_id' : this.asignacionVentanillaGroup.value.ventanilla_id
        };
        this.asignacionVentanillaService.store(data).subscribe(res=>{
            this.asignacionVentanillaGroup.reset();
        });
    }
}
