import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TermekModel } from '../models/termek-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermekService {

  constructor(private http:HttpClient) {

  }

  getAllTermek():Observable<TermekModel[]> {
    return this.http.get<TermekModel[]>("http://localhost:8000/api/termek");
  }

}
