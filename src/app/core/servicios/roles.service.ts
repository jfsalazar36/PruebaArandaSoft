import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  ROLES = 'roles';
  constructor(
    private http: HttpClient
  ) { }

  public consultarRoles(){
    return this.http.get(`${environment.apiHost}/${this.ROLES}`)
      .pipe(
        map((res: any) => {
          return res.resultado;
        })
      );
  }
}
