import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { DemoParamsComponent } from './demo-params/demo-params.component';
import { UsersComponent } from './demo-params/users/users.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

const routes: Routes = [
	// {path: '', component: DemoComponent},
	{path: 'about', component: AboutComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'demo-dialogue', component: DemoDialogueComponent},
	{path: 'demo-directives', component: DemoDirectivesComponent},
	{path: 'demo-pipes', component: DemoPipesComponent},
	{path: 'hello-angular', component: HelloAngularComponent},
	{path: 'info', component: InfoComponent},
	{path: 'forms', component: ReactiveFormDemoComponent},
	{
		path: 'params',
			component: DemoParamsComponent,
			children: [
				{path: ':id', component: UsersComponent},
			]
	},
  {path: 'demo-http', component: DemoHttpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
