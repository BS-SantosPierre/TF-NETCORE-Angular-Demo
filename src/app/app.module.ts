import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { FormsModule } from '@angular/forms';
import { ChronoComponent } from './chrono/chrono.component';
import { ToTimePipe } from './pipes/to-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    DemoPipesComponent,
    ToFahrenheitPipe,
    TemperaturePipe,
    DemoDirectivesComponent,
    ChronoComponent,
    ToTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
