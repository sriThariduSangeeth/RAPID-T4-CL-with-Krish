import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPetsComponent } from './add-edit.pets/add-edit.pets.component';
import { DisplayPetsComponent } from './display.pets/display.pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { MatTableModule } from '@angular/material/table';
import { AnimalService } from '../services/animal.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AddEditPetsComponent,
    DisplayPetsComponent
  ],exports:[
    DisplayPetsComponent,
    AddEditPetsComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [AnimalService]
})
export class PetsModule { }
