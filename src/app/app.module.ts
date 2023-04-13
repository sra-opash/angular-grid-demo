import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularGridComponent } from './angular-grid/angular-grid.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapImageComponent } from './map-image/map-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularGridComponent,
    MapImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
