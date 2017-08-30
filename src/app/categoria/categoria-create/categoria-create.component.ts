import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
    categoriaGroup: FormGroup;
    prioridades: any[] = [];
    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit() {
        for(let i = 1; i<=10; i++){
            this.prioridades.push({
                "value": i
            });
        }
        this.categoriaGroup = new FormGroup({
            'descripcion': new FormControl(null, [Validators.required]),
            'acronimo': new FormControl(null, [Validators.required]),
            'prioridad': new FormControl(null, [Validators.required]),
        });
    }
    store(){
        let data = {
            "descripcion": this.categoriaGroup.value.descripcion,
            "acronimo": this.categoriaGroup.value.acronimo,
            "prioridad": this.categoriaGroup.value.prioridad,
        };
        this.categoriaService.store(data).subscribe(res=>{
            console.log(res);
            this.categoriaGroup.reset();
        });
    }

}
