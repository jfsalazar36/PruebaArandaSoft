import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "../servicios/login.service";

@Injectable({
    providedIn: 'root'
  })
export class GuardaAutenticacion implements CanActivate {
    constructor(
        private loginService: LoginService
        ) { }

    canActivate(): boolean {
        return this.loginService.estaLogueado()
    }
}
  