import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    HomeRoutingModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
