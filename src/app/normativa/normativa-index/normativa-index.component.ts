import { Component, OnInit } from '@angular/core';
import {NormativaService} from '../normativa.service';

@Component({
  selector: 'app-normativa-index',
  templateUrl: './normativa-index.component.html',
  styleUrls: ['./normativa-index.component.css']
})
export class NormativaIndexComponent implements OnInit {
    normativas: any;
    loading = false;
    constructor(private normativaService: NormativaService) {}

    ngOnInit() {
        this.normativaService.index()
            .subscribe(res => {
                this.normativas = res;
                this.loading = true;
            });
    }
    onDelete(normativa){
        const index = this.normativas.findIndex((normativaEl)=>{
            return normativaEl.id == normativa.id;
        });
        this.normativas.splice(index, 1);
    }
}
