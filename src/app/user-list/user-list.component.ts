import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(private usersrv: UserService) {}

  ngOnInit() {
    this.usersrv.list()
      .subscribe(User => {
        this.users = User;
        console.log("Users:", User)
   })
  }
}