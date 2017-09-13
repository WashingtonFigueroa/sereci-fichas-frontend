import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
    usuarioGroup: FormGroup;
    tipos: any[] = [
        {value: 'administrador'},
        {value: 'comunicador'},
        {value: 'cajero'}
    ];
    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.usuarioGroup = new FormGroup({
            'tipo' : new FormControl(null, [Validators.required]),
            'cuenta' : new FormControl(null, [Validators.required]),
            'nombres' : new FormControl(null, [Validators.required]),
            'apellidos' : new FormControl(null, [Validators.required]),
            'carnet' : new FormControl(null, [Validators.required]),
            'celular' : new FormControl(null, [Validators.required]),
        });
    }

    store(){
        const data = {
            'tipo' : this.usuarioGroup.value.tipo,
            'cuenta' : this.usuarioGroup.value.cuenta,
            'nombres' : this.usuarioGroup.value.nombres,
            'apellidos' : this.usuarioGroup.value.apellidos,
            'carnet' : this.usuarioGroup.value.carnet,
            'celular' : this.usuarioGroup.value.celular
        };
        this.usuarioService.store(data).subscribe(res=>{
            console.log(res);
            this.usuarioGroup.reset();
        });
    }
}
