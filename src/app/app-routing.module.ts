import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromComponent } from './comps/from/from.component';
import { FromEventComponent } from './comps/from-event/from-event.component';
import { PipeComponent } from './comps/pipe/pipe.component';
import { MapComponent } from './comps/map/map.component';
import { HomeComponent } from './comps/home/home.component';
import { AjaxComponent } from './comps/ajax/ajax.component';
import { AjaxCodComponent } from './comps/ajax/ajax-cod/ajax-cod.component';
import { IntervalComponent } from './comps/interval/interval.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'from',component:FromComponent},
  {path:'from-event',component:FromEventComponent},
  {path:'interval',component:IntervalComponent},
  {path:'map',component:MapComponent},
  {path:'pip',component:PipeComponent},
  {path:'ajax',component:AjaxComponent,
   children:[
    {path:'AjaxCodComponent',component:AjaxCodComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
