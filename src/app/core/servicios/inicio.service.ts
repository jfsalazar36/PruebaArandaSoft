import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private ROLES = 'roles';

  constructor(
    private loginService: LoginService
  ) {
   }

   public obtenerRoles(): string {
    const roles = sessionStorage.getItem(this.ROLES);
    if (roles) {
      return roles;
    }

    return '';
   }
}
