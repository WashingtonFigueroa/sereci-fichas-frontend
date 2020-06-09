import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticuloService} from '../articulo.service';
import {NormativaService} from '../../normativa/normativa.service';

@Component({
    selector: 'app-articulo-create',
    templateUrl: './articulo-create.component.html',
    styleUrls: ['./articulo-create.component.css']
})
export class ArticuloCreateComponent implements OnInit {
    articuloGroup: FormGroup;
    normativas: any[];

    constructor(private normativaService: NormativaService, private articuloService: ArticuloService) {
        this.normativaService.index().subscribe(res => this.normativas = res);
    }

    ngOnInit() {
        this.articuloGroup = new FormGroup({
            'normativa_id': new FormControl(null, [Validators.required]),
            'numero': new FormControl(null, [Validators.required]),
            'inciso': new FormControl(null, [Validators.required]),
            'descripcion': new FormControl(null, [Validators.required])
        });
        console.log(this.articuloGroup);
    }

    store() {
        const data = {
            'normativa_id': this.articuloGroup.value.normativa_id,
            'numero': this.articuloGroup.value.numero,
            'inciso': this.articuloGroup.value.inciso,
            'descripcion': this.articuloGroup.value.descripcion,
        };
        this.articuloService.store(data).subscribe(res => {
            this.articuloGroup.reset();
        });
    }
}
