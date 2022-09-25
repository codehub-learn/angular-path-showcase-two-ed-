import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../services/data.service";
import {User} from "../../shared/domain/user";
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router,
              private location: Location) {
    this.user = new User(0, "", "", "", "");
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      let id = params["id"];
      if(id <= 0){
        this.router.navigate(["404"]);
      } else {
        this.dataService.getById(id).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }

  redirectToPreviousPage() {
    this.location.back();
  }
}
