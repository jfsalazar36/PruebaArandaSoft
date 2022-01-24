import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardaAutenticacion } from "src/app/core/guardia/guarda.autenticacion";
import { LoginComponent } from "src/app/inicio-sesion/login/login.component";
import { UsuarioComponent } from "./usuario.component";

const routes: Routes = [
    {
        path: '',
        component: UsuarioComponent,
        canActivate: [GuardaAutenticacion]
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UsuarioRoutingModule {}