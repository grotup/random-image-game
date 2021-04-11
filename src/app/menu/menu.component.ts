import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopinNouvellePartieComponent } from '../popin-nouvelle-partie/popin-nouvelle-partie.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  public ouvrirPopin() {
    this.matDialog.open(PopinNouvellePartieComponent);
  }
}
