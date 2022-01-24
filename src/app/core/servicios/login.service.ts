import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../dtos/login.dto';
import { UsuarioLoginDto } from '../dtos/usuario-login.dto';
import { map, catchError } from 'rxjs/operators'
import { CatchHttpErrorHelper } from '../helpers/catchHttpError.helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private USUARIO = 'usuario';
  private DATA = 'data';
  private ROLES = 'roles';
  loginResponse!: UsuarioLoginDto;
  public handler = new CatchHttpErrorHelper();

  constructor(
    private http: HttpClient
  ) {}

  public login(login: LoginDto): any {
    return this.http.post(`${environment.apiHost}/${this.USUARIO}/Login`, login)
      .pipe(
        map((res: any) => {
          if (res.exitoso) {
            this.setData(res);
          }

          return res;
        })
      )
      .pipe(
        catchError(this.handler.handleError)
      );
  }

  public estaLogueado(): boolean {
    const jwt = this.getJwt();
    if (jwt) {
      return (jwt !== null && jwt.length > 0);
    } else {
      return false;
    }
  }

  public logout() {
    sessionStorage.clear();
    location.href = '/login';
  }

  public getJwt() {
    return (sessionStorage.getItem(this.ROLES));
  }

  public getJwtData() {
    return (sessionStorage.getItem(this.DATA));
  }

  private setData(res: any) {
    this.loginResponse = res.resultado;
    sessionStorage.setItem(this.DATA, JSON.stringify(res.resultado));
    this.setRoles();
  }

  private setRoles() {
    const token = sessionStorage.getItem(this.ROLES);
    if (token === null || token.length === 0) {
      sessionStorage.setItem(this.ROLES, this.loginResponse.token.roles);
    }
  }
}
