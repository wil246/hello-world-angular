import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(

    private usersrv: UserService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersrv.get(id)
    .subscribe(u=> {
      console.log("user:", u);
      this.user = u;
    });
  }

}
