import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoituresComponent } from './voitures.component';
import { voitureResolver } from './voiture.resolver';
const VoituresRoutes:Routes=[
{
  path:'voitures',
  component:VoituresComponent,
  children:[
    {path:'',component:VoitureStartComponent},
    {path:'new',component:VoitureEditComponent},
    {path:':id',component:VoitureDetailComponent,resolve:voitureResolver},
    {path:'/edit/:id',component:VoitureEditComponent ,resolve:voitureResolver}
  ]
},];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(VoituresRoutes)
  ],
  exports:[
    [RouterModule]
  ]
})
export class VoituresRoutingModule { }
