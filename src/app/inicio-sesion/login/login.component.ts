import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { AlertaService } from 'src/app/core/servicios/alerta.service';
import { LoginService } from 'src/app/core/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public mostrarMensaje: boolean = false;
  public error: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alerta: AlertaService
  ) {}

  ngOnInit(): void {
    if (this.loginService.estaLogueado()) {
      this.router.navigate(['inicio']);
    }
    this.loginForm = this.crearFormulario();
  }

  crearFormulario() {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(formValues: FormGroup) {
    if (this.loginForm.valid) {
      const login: LoginDto = {
        Nombre: formValues.value.nombre,
        Password: formValues.value.password,
      };
      this.loginService.login(login).subscribe(
        (validate: any) => {
          if (validate.exitoso) {
            location.href = `${window.origin}/inicio`;
          } else {
            this.error = validate.mensajeError;
            this.mostrarMensaje = true;
            this.alerta.error(validate.mensajeError, true);
          }
        },
        (error: any) => {
          this.alerta.error(
            'No se pudo establer conexión con los servicios de ArandaSoft. Intenta más tarde',
            true
          );
        }
      );
    }
  }
}
