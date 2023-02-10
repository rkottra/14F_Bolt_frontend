import { Component, OnInit } from '@angular/core';
import { TermekModel } from '../models/termek-model';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {

  public termekek : TermekModel[] = [];
  public columnsToDisplay = ['nev', 'leiras', 'ar', 'csokkentettar'];
  
  constructor(private backend:TermekService) { 
    this.backend.getAllTermek().subscribe((data) => {
        this.termekek = data;
    })
  }

  ngOnInit(): void {
  }

}
