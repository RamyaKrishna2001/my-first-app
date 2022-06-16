import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { WraperComponent } from './wraper/wraper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { userDetailsService } from './register/user-details.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpRequestModuleComponent } from './http-request-module/http-request-module.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    WraperComponent,
    PageNotFoundComponent,
    HttpRequestModuleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [userDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
