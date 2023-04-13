import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularGridComponent } from './angular-grid/angular-grid.component';

const routes: Routes = [
  {
    path: '',
    component: AngularGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
