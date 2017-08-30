import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VentanillaService} from '../ventanilla.service';

@Component({
  selector: 'app-ventanilla-show',
  templateUrl: './ventanilla-show.component.html',
  styleUrls: ['./ventanilla-show.component.css']
})
export class VentanillaShowComponent implements OnInit {
    @Input() ventanilla:any;
    @Output() destroyVentanilla = new EventEmitter<any>();


    toggle:boolean = false;
    constructor(private ventanillaService:VentanillaService) {
    }

    ngOnInit() {
        console.log(this.ventanilla);
    }
    update(){
        this.ventanillaService.update(this.ventanilla).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.ventanillaService.destroy(this.ventanilla.id).subscribe(res => {
            console.log(res);
            this.destroyVentanilla.emit(this.ventanilla);
        });
    }
}
