import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';

const herosRoutes: Routes = [
  {
    path: '',
    component: HerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(herosRoutes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
