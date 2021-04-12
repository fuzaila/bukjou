import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { BooksComponent } from './books/books.component';
import { BlogComponent } from './blog/blog.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AddbookComponent } from './addbook/addbook.component';
import { RouterModule, Routes } from '@angular/router';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { AddblogComponent } from './addblog/addblog.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';


export const routes: Routes = [{path: '', component: BooksComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
    UsersigninComponent,
    SignupComponent,
    AdmindashComponent,
    BooksComponent,
    BlogComponent,
    UserdashComponent,
    AddbookComponent,
    BookupdateComponent,
    AddblogComponent,
    MybooksComponent,
    MyfavsComponent,
    AddreviewComponent,
    RecommendationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function onSameUrlNavigation(onSameUrlNavigation: any, arg1: string): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

