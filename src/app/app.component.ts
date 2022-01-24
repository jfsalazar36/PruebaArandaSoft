import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioLoginDto } from './core/dtos/usuario-login.dto';
import { LoginService } from './core/servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mostrarMenu : boolean = false;
  public infoUsuario!: UsuarioLoginDto
  title = 'PruebaArandaSoft';

  constructor(
    readonly translate: TranslateService,
    readonly loginService: LoginService
  ){
    this.translate.setDefaultLang('es');
    if (this.loginService.estaLogueado()) {
      this.infoUsuario = JSON.parse(sessionStorage.getItem('data')!);
      this.mostrarMenu = true;
    }
  }
  
  public RedireccionarUsuario() {
    if (this.loginService.estaLogueado()) {
      location.href = `${window.origin}/usuario`;
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
