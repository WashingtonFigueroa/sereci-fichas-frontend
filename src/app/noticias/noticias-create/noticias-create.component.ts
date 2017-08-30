import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-noticias-create',
  templateUrl: './noticias-create.component.html',
  styleUrls: ['./noticias-create.component.css']
})
export class NoticiasCreateComponent implements OnInit {
    noticiasGroup: FormGroup;
    constructor(private noticiasService:NoticiasService) {

    }

    ngOnInit() {
        this.noticiasGroup = new FormGroup({
            'descripcion' : new FormControl(null, [
                Validators.required
            ])
        });
        console.log(this.noticiasGroup);
    }
    store(){
        let data = {
            'descripcion' : this.noticiasGroup.value.descripcion
        };
        this.noticiasService.store(data).subscribe(res=>{
            this.noticiasGroup.reset();
        });
    }
}
