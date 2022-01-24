import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/core/servicios/inicio.service';
import { LoginService } from 'src/app/core/servicios/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  public bienvenida: string = '';
  public mostrarNoticias: boolean = false;
  public mostrarMensaje: boolean = false;
  public rol: string = '';

  constructor(
    private inicioService: InicioService,
    readonly loginService: LoginService
  ) {
    if (this.loginService.estaLogueado()) {
      this.rol = this.inicioService.obtenerRoles(); 
    } else {
      location.href = `${window.origin}/login`;
    }
   }

  ngOnInit(): void {
    this.validarMostrarNoticias();
    this.validarMostrarMensaje();
  }

  private validarMostrarNoticias() {
    if (this.rol === 'Administrador') {
      this.mostrarNoticias = true;
    }
  }

  public validarMostrarMensaje() {
    if (this.rol !== 'Visitante') {
      this.mostrarMensaje = true;
    }
  }

}
