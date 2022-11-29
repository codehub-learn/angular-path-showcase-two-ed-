import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../shared/domain/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  showUserDetails(id: number) {
    let currentUrl = this.router.url;
    this.router.navigate([currentUrl, id]);
  }
}
