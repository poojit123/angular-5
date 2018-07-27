import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';
// For http
import { HttpClientModule } from '@angular/common/http';

// services
import { AuthService } from './services/auth.service';

// Our Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashComponent } from './pages/dash/dash.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';

// Routing
const appRoutes: Routes = [
  { path: '',redirectTo: '/login',pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: DashComponent, outlet:'contentBox' },
    { path: 'addUser', component: AddUserComponent, outlet:'contentBox' },
    { path: 'userList', component: UserListComponent, outlet:'contentBox' },
  ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    SideBarComponent,
    ContentComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DashComponent,
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularWebStorageModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
