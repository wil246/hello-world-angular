import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/Router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;
  save(): void{

      this.usersvc.chang(this.user)
        .subscribe(rc=> {console.log("Edit results is : ", rc);
        this.router.navigateByUrl(("/users/list");
        });
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
    private rout: ActivatedRoute,




  ) { }

  ngOnInit() {
    let id = this.rout.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(u => this.user =u);
  }

}
