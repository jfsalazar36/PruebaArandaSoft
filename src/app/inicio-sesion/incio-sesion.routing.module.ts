import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardaAutenticacion } from "../core/guardia/guarda.autenticacion";
import { InicioComponent } from "../inicio/inicio/inicio.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
      path:'',
      component: LoginComponent,
      children: [
        {
          path: 'inicio',
          component: InicioComponent,
          canActivate: [GuardaAutenticacion]
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InicioSesionRoutingModule {}