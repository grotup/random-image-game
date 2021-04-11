import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-popin-nouvelle-partie',
  templateUrl: './popin-nouvelle-partie.component.html',
  styleUrls: ['./popin-nouvelle-partie.component.scss']
})
export class PopinNouvellePartieComponent implements OnInit {

  public nombreJoueurs: number;

  partieForm = new FormGroup({
    joueur1: new FormControl('', Validators.required),
    joueur2: new FormControl(''),
    joueur3: new FormControl(''),
    joueur4: new FormControl(''),
    joueur5: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<PopinNouvellePartieComponent>,
    private partieService: PartieService) { }

  ngOnInit(): void {
    this.nombreJoueurs = this.partieService.partie?.nombreJoueurs ? this.partieService.partie.nombreJoueurs : 2;
  }

  public isValide() {
    console.log(this.partieForm.valid);
    return this.partieForm.valid;
  }

  public fermerPopin() {
    console.log(this.partieForm.valid);

    this.partieService.joueurs = this.nombreJoueurs;
    this.dialogRef.close();
  }
}
