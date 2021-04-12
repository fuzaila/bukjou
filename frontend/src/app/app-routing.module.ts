import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { BooksComponent } from './books/books.component';
import { BlogComponent } from './blog/blog.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { AddblogComponent } from './addblog/addblog.component';
import { UserdashComponent } from './userdash/userdash.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"admin", component: AdminComponent},
  {path: "user", component: UserComponent, 
    children: [{path: "usersignin", component: UsersigninComponent}, 
              {path: "signup", component: SignupComponent}] },
  {path: "admindash", component: AdmindashComponent, canActivate: [AuthGuard],
    children: [{path: "books", component: BooksComponent, children:[{path: ":_id", component: BookupdateComponent}]}, 
               {path: "blog", component: BlogComponent},
               {path: "addbook", component: AddbookComponent},
               {path: "addblog", component: AddblogComponent} ] },
  {path:"userdash/:_id", component: UserdashComponent, canActivate: [AuthGuard],
    children: [{path: "books", component: BooksComponent}, 
               {path: "blogs", component: BlogComponent},
               {path: "mybooks", component: MybooksComponent, children:[{path: ":bookid", component: AddreviewComponent}]},
               {path: "myfavs", component: MyfavsComponent},
               {path: "recommendations", component: RecommendationsComponent} ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
