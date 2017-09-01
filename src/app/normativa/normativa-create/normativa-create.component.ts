import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NormativaService} from '../normativa.service';

@Component({
  selector: 'app-normativa-create',
  templateUrl: './normativa-create.component.html',
  styleUrls: ['./normativa-create.component.css']
})
export class NormativaCreateComponent implements OnInit {
    normativaGroup: FormGroup;
    constructor(private normativaService: NormativaService) {}

    ngOnInit() {
        this.normativaGroup = new FormGroup({
            'codigo' : new FormControl(null, [Validators.required]),
            'descripcion' : new FormControl(null, [Validators.required])
        });
        console.log(this.normativaGroup);
    }
    store(){
        const data = {
            'codigo' : this.normativaGroup.value.codigo,
            'descripcion' : this.normativaGroup.value.descripcion,
            'vigente' : true,
        };
        this.normativaService.store(data).subscribe(res=>{
            this.normativaGroup.reset();
        });
    }
}
