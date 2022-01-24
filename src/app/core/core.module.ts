import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Route } from "@angular/compiler/src/core";
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from "@angular/core";
import { AddHeaderInterceptor } from "./interceptors/addHeader.interceptor";
import { HttpErrorInterceptor } from "./interceptors/httpResponseHandler.interceptor";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
  
    SidebarComponent
  ],
    imports: [
      CommonModule
    ],
    exports: [
      SidebarComponent
    ],
    entryComponents: [
      SidebarComponent
    ]
  })
  export class CoreModule {
    static forRoot(): ModuleWithProviders<Route> {
      return {
        ngModule: CoreModule,
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: AddHeaderInterceptor,
            multi: true
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
          }
        ]
      };
    }
  }