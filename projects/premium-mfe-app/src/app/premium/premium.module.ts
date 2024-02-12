import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumComponent } from './premium.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PremiumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
     { path: "",component:PremiumComponent, pathMatch:'full'}
    ])
  ]
})
export class PremiumModule { }
