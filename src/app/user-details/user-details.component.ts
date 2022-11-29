import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {User} from "../shared/domain/user";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private location: Location, private router: Router) {
    this.user = new User(0, "", "", "", "");
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // you could check for negative id, not a number id etc.
      let id = params["id"];
      if (id > 0){
        this.userService.getById(id).subscribe((user) => {
          console.log(user);
          this.user = user;
        });
      } else {
        // redirect to /404 or something similar
        this.router.navigate([""]);
      }
    })
  }

  goBack(){
    this.location.back();
  }

}
