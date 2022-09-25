import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: any;

  constructor(private userService: DataService, private router: Router) { }

  ngOnInit(): void {
    // get data
    this.userService.get().subscribe(allUsers => this.users = allUsers);
  }

  redirectToUserDetails(user_id: number) {
    let currentUrl = this.router.url;
    this.router.navigate([currentUrl, user_id]);
  }
}
