import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { ChronoComponent } from './chrono/chrono.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { LoginComponent } from './login/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { ViewListComponent } from './shopping-list/view-list/view-list.component';
import { ToTimePipe } from '../pipes/to-time.pipe';

@NgModule({
  declarations: [
		AccordeonComponent,
		ChronoComponent,
		FruitListComponent,
		LoginComponent,
		ShoppingListComponent,
		ViewListComponent,
		ToTimePipe
	],
  imports: [
    CommonModule,
		FormsModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
