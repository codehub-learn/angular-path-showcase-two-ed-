import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://reqres.in/api/users';

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.baseUrl);
  }

  getById(id:number){
    return this.http.get(this.baseUrl + '/' + id);
  }

}
