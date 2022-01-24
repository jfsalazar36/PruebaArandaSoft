import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario/usuario.routing.module';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
