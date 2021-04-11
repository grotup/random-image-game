import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-popin-nouvelle-partie',
  templateUrl: './popin-nouvelle-partie.component.html',
  styleUrls: ['./popin-nouvelle-partie.component.scss']
})
export class PopinNouvellePartieComponent implements OnInit {

  public nombreJoueurs: number;

  constructor(public dialogRef: MatDialogRef<PopinNouvellePartieComponent>,
    private partieService: PartieService) { }

  ngOnInit(): void {
    this.nombreJoueurs = this.partieService.partie?.nombreJoueurs ? this.partieService.partie.nombreJoueurs : 2;
  }

  public fermerPopin() {
    this.partieService.joueurs = this.nombreJoueurs;
    this.dialogRef.close();
  }
}
