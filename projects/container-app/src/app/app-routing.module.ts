import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:"",
    redirectTo:"home",
    pathMatch:'full'
},
  { 
    path: "home",
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Container-Home'
  },
  {
    path:"insurance-details",
    loadChildren: () => import("insuranceMfeApp/InsuranceDetailsModule").then(m => m.InsuranceDetailsModule),
    title: 'Container-Insurance'
  },
  {
    path:"premium-payment",
    loadChildren: () => import("premiumMfeApp/PremiumModule").then(m => m.PremiumModule),
    title: 'Container-Premium'
  },
  {
    path: '**', 
    redirectTo:"home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
