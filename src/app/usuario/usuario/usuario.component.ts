import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesDto } from 'src/app/core/dtos/roles.dto';
import { UsuarioDto } from 'src/app/core/dtos/usuario.dto';
import { InicioService } from 'src/app/core/servicios/inicio.service';
import { LoginService } from 'src/app/core/servicios/login.service';
import { RolesService } from 'src/app/core/servicios/roles.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass'],
})
export class UsuarioComponent implements OnInit {
  public busquedaForm: FormGroup;
  public rol: string = '';
  public mostrarCrear: boolean = false;
  public mostrarEditar: boolean = false;
  public usuarios!: Array<UsuarioDto>;
  public roles!: Array<RolesDto>;
  public pagination!: {
    totalPaginas: number,
    paginaActual: number,
    cuentaTotal: number
  };

  constructor(
    private inicioService: InicioService,
    readonly loginService: LoginService,
    readonly usuarioService: UsuarioService,
    readonly rolesService: RolesService
  ) {
    if (this.loginService.estaLogueado()) {
      this.rol = this.inicioService.obtenerRoles();
    } else {
      location.href = `${window.origin}/login`;
    }

    // this.usuarioForm = this.crearFormulario();
    this.busquedaForm = this.crearFormularioBusqueda();
  }

  ngOnInit(): void {
    this.consultarRoles();
  }

  private consultarRoles() {
    this.rolesService.consultarRoles().subscribe((resultado: Array<RolesDto>) => {
      this.roles = resultado;
    });
  }

  // crearFormulario() {
  //   return new FormGroup({
  //     primerNombre: new FormControl('', Validators.required),
  //     segundoNombre: new FormControl(''),
  //     primerApellido: new FormControl('', Validators.required),
  //     segundoApellido: new FormControl(''),
  //     nombreCompleto: new FormControl(''),
  //     direccion: new FormControl('', Validators.required),
  //     telefono: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.required),
  //     edad: new FormControl('', Validators.required),
  //     rolId: new FormControl('', Validators.required),
  //   });
  // }

  crearFormularioBusqueda() {
    return new FormGroup({
      nombre: new FormControl(''),
      rolId: new FormControl(''),
    });
  }

  consultarUsuario(pagina: any) {
    this.usuarioService.consultarUsuarios(
      this.busquedaForm.controls.nombre.value,
      this.busquedaForm.controls.rolId.value,
      pagina,
      environment.pageSize
    ).subscribe((respuesta: any) => {
      this.usuarios = respuesta;
      this.pagination = respuesta.paginacion;
    });
  }

  crearUsuario() {

  }

  editarUsuarios(itemUsuario: UsuarioDto) {

  }
}
