import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { EnfantDialogueComponent } from './demo-dialogue/enfant-dialogue/enfant-dialogue.component';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { Demo12Component } from './demo12/demo12.component';
import { DemoParamsComponent } from './demo-params/demo-params.component';
import { UsersComponent } from './demo-params/users/users.component';
import { TodoInlineComponent } from './todo-inline/todo-inline.component';
import { TodoItemComponent } from './todo-inline/todo-item/todo-item.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { UserDetailComponent } from './demo-http/user-detail/user-detail.component';


@NgModule({
  declarations: [
		AboutComponent,
		ContactComponent,
		DemoDialogueComponent,
		DemoDirectivesComponent,
		DemoPipesComponent,
		HelloAngularComponent,
		InfoComponent,
		EnfantDialogueComponent,
		ReactiveFormDemoComponent,
		TemperaturePipe,
		ToFahrenheitPipe,
		DemoComponent,
		Demo12Component,
		DemoParamsComponent,
		UsersComponent,
  	TodoInlineComponent,
   	TodoItemComponent,
		DemoHttpComponent,
		UserDetailComponent
	],
  imports: [
    CommonModule,
		ReactiveFormsModule,
    DemoRoutingModule,
		FormsModule,
  ],
	exports: [
		AboutComponent
	],
	bootstrap: [DemoComponent]
})
export class DemoModule { }
