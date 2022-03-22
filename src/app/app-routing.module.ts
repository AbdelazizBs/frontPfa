import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginRegistreComponent } from './login-registre/login-registre.component';
import { PriceComponent } from './price/price.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'about-us' ,component:AboutUsComponent},
  {path:'service' , component:ServiceComponent},
  {path:'price' , component:PriceComponent},
  {path:'contact' , component:ContactComponent},
  {path:'login' , component:LoginRegistreComponent},
  {path:'acceuil' , component:AcceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
