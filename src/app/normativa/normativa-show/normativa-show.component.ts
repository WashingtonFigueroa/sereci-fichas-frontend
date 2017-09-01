import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NormativaService} from '../normativa.service';

@Component({
  selector: 'app-normativa-show',
  templateUrl: './normativa-show.component.html',
  styleUrls: ['./normativa-show.component.css']
})
export class NormativaShowComponent implements OnInit {
    @Input() normativa:any;
    @Output() destroyNormativa = new EventEmitter<any>();


    toggle:boolean = false;
    constructor(private normativasService: NormativaService) {
    }

    ngOnInit() {
        console.log(this.normativa);
    }
    update(){
        this.normativasService.update(this.normativa).subscribe(res=>{
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.normativasService.destroy(this.normativa.id).subscribe(res => {
            console.log(res);
            this.destroyNormativa.emit(this.normativa);
        });
    }
}
