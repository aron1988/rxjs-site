import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './comps/from/from.component';
import { IntervalComponent } from './comps/interval/interval.component';
import { FromEventComponent } from './comps/from-event/from-event.component';
import { AjaxComponent } from './comps/ajax/ajax.component';
import { MapComponent } from './comps/map/map.component';
import { PipeComponent } from './comps/pipe/pipe.component';
import { HomeComponent } from './comps/home/home.component';
import { HeaderComponent } from './comps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    IntervalComponent,
    FromEventComponent,
    AjaxComponent,
    MapComponent,
    PipeComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
