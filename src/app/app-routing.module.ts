import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { WraperComponent } from './wraper/wraper.component';
import { HttpRequestModuleComponent } from './http-request-module/http-request-module.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'users',
    component: WraperComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      { path: ':userName', component: UsersComponent },
    ],
  },
  { path: 'studentDetails', component: HttpRequestModuleComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
