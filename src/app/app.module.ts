import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import {ScrollTopModule} from 'primeng/scrolltop';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { LoginRegistreComponent } from './login-registre/login-registre.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';


@NgModule({
  declarations: [
    AppComponent,
        HomeComponent,
    HeaderComponent,  
    FooterComponent,
    AboutUsComponent,
    ServiceComponent,
    ContactComponent,
    PriceComponent,
    // LoginRegistreComponent,
    AcceuilComponent,
    LogoutComponent,
    LoginComponent,
    RegistreComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollTopModule,
    AccordionModule,
    ScrollPanelModule,
    ButtonModule,
    BadgeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
