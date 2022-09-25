import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: any;

  constructor(private userService: DataService) { }

  ngOnInit(): void {
    // get data
    this.users = this.userService.get();
    // this.userService.get().subscribe({
    //   next: data => this.users = data
    // });

  }

}
