import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardaAutenticacion } from "../core/guardia/guarda.autenticacion";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
    {
      path:'',
      component: InicioComponent,
      canActivate: [GuardaAutenticacion]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InicioRoutingModule {}