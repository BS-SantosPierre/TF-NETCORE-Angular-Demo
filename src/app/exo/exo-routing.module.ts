import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { ChronoComponent } from './chrono/chrono.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { LoginComponent } from './login/login.component';
import { ShoppingListPlusComponent } from './shopping-list-plus/shopping-list-plus.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
	{path: 'accordeon', component:AccordeonComponent},
	{path: 'chrono', component: ChronoComponent},
	{path: 'fruit-list', component: FruitListComponent},
	{path: 'login', component: LoginComponent},
	{path: 'shopping-list', component: ShoppingListComponent},
	{path: 'shopping-list-plus', component: ShoppingListPlusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
