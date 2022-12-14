import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, map, Observable} from "rxjs";
import {User} from "../shared/domain/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((response) => {
        let users: User[] = [];
        response.data.forEach((user:User) => users.push(user));
        return users;
      })
    );
  }

  getById(id: number): Observable<User> {
    return this.http.get<any>(this.baseUrl + "/" + id).pipe(
      map((response) => {
        let data = response.data;
        return new User(data.id, data.email, data.first_name, data.last_name, data.avatar);
      })
    );
  }
}
