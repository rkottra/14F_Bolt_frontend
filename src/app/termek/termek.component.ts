import { Component, Inject, OnInit } from '@angular/core';
import { TermekModel } from '../models/termek-model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.scss']
})
export class TermekComponent implements OnInit {

  public termek!:TermekModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TermekModel) { 
    this.termek = data;
  }

  ngOnInit(): void {
  }

}
