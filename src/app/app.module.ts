import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlateauComponent } from './plateau/plateau.component';
import { MenuComponent } from './menu/menu.component';
import { PopinNouvellePartieComponent } from './popin-nouvelle-partie/popin-nouvelle-partie.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
