import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPetsComponent } from './add-edit.pets/add-edit.pets.component';
import { DisplayPetsComponent } from './display.pets/display.pets.component';

const petsRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard', component: DisplayPetsComponent},
  {path:'add', component: AddEditPetsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(petsRoutes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
