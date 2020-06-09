import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';



import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ActividadesComponent } from './actividades/actividades.component';


//Rutas
import {APP_ROUTING} from './app.routes';


//Servicios
import {ContactoService } from './contacto/contacto.service'
//para el login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { FooterComponent } from './footer/footer.component';



const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('380939380894-mfd67bl4r70blmgur8r7odje5csm0b16.apps.googleusercontent.com')
  }/* ,
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  } */
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContactoComponent,
    LoginComponent,
    FooterComponent,
    ActividadesComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SocialLoginModule,
    APP_ROUTING
  ],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
