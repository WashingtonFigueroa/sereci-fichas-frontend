import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginGroup:FormGroup;
    constructor(private usuarioService: UsuarioService, private router: Router) { }

    ngOnInit() {
        this.loginGroup = new FormGroup({
            'cuenta': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required])
        });
    }
    autenticar(){
        let credenciales = {
            'cuenta': this.loginGroup.value.cuenta,
            'password': this.loginGroup.value.password
        };
        this.usuarioService.autenticar(credenciales).subscribe(res=>{
            if(res.token){
                localStorage.setItem('token', res.token);
                this.router.navigate(['usuarios']);
                console.log(res);
            }else{
                console.log(res);
            }
        });
    }

}
