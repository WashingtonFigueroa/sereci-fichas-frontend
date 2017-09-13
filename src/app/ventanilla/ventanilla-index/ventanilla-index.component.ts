import { Component, OnInit } from '@angular/core';
import {VentanillaService} from '../ventanilla.service';

@Component({
  selector: 'app-ventanilla-index',
  templateUrl: './ventanilla-index.component.html',
  styleUrls: ['./ventanilla-index.component.css']
})
export class VentanillaIndexComponent implements OnInit {
    ventanillas: any[];
    loading = false;
    constructor(private ventanillaService: VentanillaService) {
        this.ventanillaService.index().subscribe(res => {
            this.ventanillas = res;
            this.loading = true;
        });
    }
    ngOnInit() {}
    onDelete(ventanilla){
        const index = this.ventanillas.findIndex((ventanillaEl)=>{
            return ventanillaEl.id == ventanilla.id;
        });
        this.ventanillas.splice(index, 1);
    }
}
