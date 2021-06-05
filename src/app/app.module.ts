import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatIcon, MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table'; 

import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlateauComponent } from './plateau/plateau.component';
import { MenuComponent } from './menu/menu.component';
import { PopinNouvellePartieComponent } from './popin-nouvelle-partie/popin-nouvelle-partie.component';
import { jeuReducer } from './state/jeu.reducer';
import { StoreModule } from '@ngrx/store';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    PlateauComponent,
    MenuComponent,
    PopinNouvellePartieComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    StoreModule.forRoot({jeu: jeuReducer}),
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
