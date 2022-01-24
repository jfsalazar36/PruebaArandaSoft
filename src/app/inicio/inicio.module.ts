import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { InicioRoutingModule } from './inicio.routing.module';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { InicioSesionModule } from '../inicio-sesion/inicio-sesion.module';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CoreModule,
    FontAwesomeModule,
    TranslateModule,
    InicioSesionModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
