import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatTabsModule} from '@angular/material/tabs'; 

import {MatSidenavModule} from '@angular/material/sidenav'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlateauComponent } from './plateau/plateau.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateauComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
