import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VentanillaService} from '../ventanilla.service';

@Component({
  selector: 'app-ventanilla-create',
  templateUrl: './ventanilla-create.component.html',
  styleUrls: ['./ventanilla-create.component.css']
})
export class VentanillaCreateComponent implements OnInit {

    ventanillaGroup: FormGroup;
    constructor(private ventanillaService: VentanillaService) { }

    ngOnInit() {
        this.ventanillaGroup = new FormGroup({
            'numero': new FormControl(null, [Validators.required, Validators.min(1)])
        });
    }
    store(){
        let data = {
            'numero' : this.ventanillaGroup.value.numero
        };
        this.ventanillaService.store(data).subscribe(res=>{
            console.log(res);
            this.ventanillaGroup.reset();
        });
    }

}
