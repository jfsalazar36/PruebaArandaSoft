import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionRoutingModule } from './incio-sesion.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginComponent,
    InformacionUsuarioComponent
  ],
  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
  ],
  exports: [
    InformacionUsuarioComponent
  ]
})
export class InicioSesionModule { }
