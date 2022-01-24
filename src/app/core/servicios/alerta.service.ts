import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Alerta } from '../modelos/alerta/alerta';
import { TipoAlerta } from '../modelos/alerta/tipo-alerta.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  private subject = new Subject<Alerta>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.limpiar();
        }
      }
    });
  }
  
  getAlerta(): Observable<any> {
    return this.subject.asObservable();
  }

  exitoso(message: string, keepAfterRouteChange = false) {
    this.alerta(TipoAlerta.Success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alerta(TipoAlerta.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alerta(TipoAlerta.Info, message, keepAfterRouteChange);
  }

  advertencia(message: string, keepAfterRouteChange = false) {
    this.alerta(TipoAlerta.Warning, message, keepAfterRouteChange);
  }

  alerta(tipo: TipoAlerta, mensaje: string, keepAfterRouteChange = false) {
    const date = new Date();
    this.keepAfterRouteChange = keepAfterRouteChange;
    const alertFullDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    this.subject.next({ tipo, mensaje, tiempo: alertFullDate } as Alerta);
  }

  limpiar() {
    this.subject.next();
  }
}
