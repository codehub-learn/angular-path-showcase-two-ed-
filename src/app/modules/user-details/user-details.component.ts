import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:DataService,
    private router:Router) { }

  id:any;
  response: any;
  show: any;

  ngOnInit(): void {

    // get id and then the data
    this.route.params.subscribe({
      next: par => this.id = par['id']
    });

    this.response = this.service.getById(this.id)


    // get queries...
    this.show = this.route.queryParams;


    // fake -- simulation of routes
    this.route.params.subscribe({
      next: par => {
        if(par){
          this.id = par['id'];

          if (this.id == 0){
            this.router.navigateByUrl('/')
          } else if (this.id == 100) {
            this.router.navigate(['page'])
          }

        }
      }

    });


  }

}
