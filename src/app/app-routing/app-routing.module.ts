import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { UserListComponent } from '../user-list/user-list.component'
import { UserDetailComponent } from '../user-detail/user-detail.component'
import { UserEditComponent } from '../user-edit/user-edit.component'

const approutes: Routes = [
   { path: "", redirectTo: "/home", pathMatch: "full"}
  ,{ path: "home", component: HomeComponent}
  ,{ path: "users/list", component: UserListComponent} 
  ,{ path: "users/detail/:id", component: UserDetailComponent} 
  ,{ path: "users/edit/:id", component: UserEditComponent} 
  ,{ path: "**", component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
