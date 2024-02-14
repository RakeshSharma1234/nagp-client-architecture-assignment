import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';

const routes: Routes = [
  { 
    path:"",
    component: InsuranceDetailsComponent,
    pathMatch:'full'

},
{
  path: '**', 
  redirectTo:"",
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
