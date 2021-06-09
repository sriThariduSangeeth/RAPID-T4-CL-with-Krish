import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindLargeNumberComponent } from './find-large-number/find-large-number.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: DashboardComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'large-num', component: FindLargeNumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
