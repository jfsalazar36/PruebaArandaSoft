import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from '../dtos/usuario.dto';
import { PaginacionParametrosHelper } from '../helpers/paginacionParametros.helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private USUARIO = 'usuario';

  constructor(
    private http: HttpClient
  ) { }

  public consultarUsuarios(nombre: string, rolId: number, pageNumber: number,
    pageSize: number){
      let ruta: string = '';
      if (nombre && rolId) {
        ruta = `NombreRol/${nombre}/${rolId}`
      } else if (nombre) {
        ruta = `Nombre/${nombre}`;
      } else {
        ruta = `Rol/${rolId}`;
      }
      const paginacion =
      pageNumber && 10
        ? PaginacionParametrosHelper.addPaginationParameters(
            pageNumber,
            pageSize,
          )
        : {};
    return this.http.get(`${environment.apiHost}/${this.USUARIO}/${ruta}`, {
      params: paginacion,
    })
      .pipe(
        map((res: any) => {
          return res.Resultado;
        })
      );
  }

  crear(usuario: UsuarioDto): any {
    return this.http
      .post(
        `${environment.apiHost}/${this.USUARIO}/Create`,
        JSON.stringify(usuario)
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  actualizar(usuario: UsuarioDto): any {
    return this.http
      .put(
        `${environment.apiHost}/${this.USUARIO}/Update`,
        JSON.stringify(usuario),
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  eliminar(usuarioId: number): any {
    return this.http
      .delete(
        `${environment.apiHost}/${this.USUARIO}/Delete/${usuarioId}`
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
