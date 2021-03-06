import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    // Material's imports
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
