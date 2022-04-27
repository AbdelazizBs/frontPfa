import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import { LoginRegistreComponent } from './login-registre/login-registre.component';
import { PriceComponent } from './price/price.component';
import { ServiceComponent } from './service/service.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service'
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AnnanceComponent } from './annance/annance.component';
import { AllAnnanceComponent } from './all-annance/all-annance.component';
import { AnnanceDetailsComponent } from './annance-details/annance-details.component';
import { AddAnnanceComponent } from './add-annance/add-annance.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-header" },
  {path:'' , component:HomeComponent},
  {path:'about-us' ,component:AboutUsComponent },
  {path:'service' , component:ServiceComponent},
  {path:'price' , component:PriceComponent },
  {path:'contact' , component:ContactComponent , },
  {path:'login' , component:LoginComponent},
  {path:'registre' , component:RegistreComponent},
  {path:'acceuil' , component:AcceuilComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'annances', component: AnnanceComponent},
  { path: 'allAnnances', component: AllAnnanceComponent},
  { path: 'annanceDetails', component: AnnanceDetailsComponent},
  { path: 'addAnnance', component: AddAnnanceComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
