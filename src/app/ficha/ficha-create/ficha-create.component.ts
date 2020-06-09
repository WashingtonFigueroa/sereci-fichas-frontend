import {Component, OnInit} from '@angular/core';
import {CategoriaService} from '../../categoria/categoria.service';
import {FichaService} from '../ficha.service';

@Component({
    selector: 'app-ficha-create',
    templateUrl: './ficha-create.component.html',
    styleUrls: ['./ficha-create.component.css']
})
export class FichaCreateComponent implements OnInit {
    categorias: any[];
    ficha: any = null;
    fecha: any = null;

    constructor(private categoriaService: CategoriaService, private fichaService: FichaService) {
    }

    ngOnInit() {
        this.categoriaService.index()
            .subscribe(res => this.categorias = res);
    }

    printFicha() {
        let content = document.getElementById('report').outerHTML;
        console.log(content);
        let ventana = window.open('', '_blank', '');
        // language=HTML
        ventana.document.write(`
          <html>
            <head>
                <style>
                @media screen {
                    body {
                        display: none;
                    }
                }
                @media print {
                    @page {
                        size: 3in 3in;
                    }

                    body{
                        position: absolute;
                        left: 0;
                        top: 0;
                        display: block;
                        font-family: Arial;
                        font-size: 8pt;
                        margin: 0;
                    }
                    .ticket-numero{
                        font-size: 34pt;
                        font-weight: bolder;
                        margin: 0;
                        float: right;
                        text-align: left;
                    }
                    .date{
                        float: right;
                        font-size: 18pt;
                        text-align: right;
                    }
                    .ticket-logo{
                        display: block;
                        float: left;
                        width: .8in;
                        height: .8in;
                        margin-bottom: 5vh;
                    }
                    .ticket-aviso{
                        text-align: center;
                        font-size: 1.1em;
                        font-weight: bold;
                    }
                    .clear{
                        clear: both;
                    }
                    .text-center{
                        text-align: center;
                    }
                    .line{
                        border-bottom: 1px solid darkslategray;
                        width: 100%;
                        margin: 0;
                    }
                }
                </style>
            </head>
            <body onload="window.print();window.close()">
                ${content}
            </body>
          </html>
      `);
        ventana.print();
        ventana.close();
        const logo: any = document.getElementById('logo');
        logo.src = 'assets/logo.png';
    }

    store(categoria) {
        this.ficha = null;
        this.fichaService.store(categoria).subscribe(res => {
            this.ficha = res;
            this.fecha = new Date();
            console.log(res);
        });
        setTimeout(() => {
            this.printFicha();
        }, 1000);
    }

}
