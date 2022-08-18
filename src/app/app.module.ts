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

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    DemoPipesComponent,
    ToFahrenheitPipe,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
