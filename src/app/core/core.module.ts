import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
