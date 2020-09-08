import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopUserByCountryComponent } from './pages/top-user-by-country/top-user-by-country.component';
import { TopRepositoriesComponent } from './pages/top-repositories/top-repositories.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RepositoryDetailsComponent } from './pages/repository-details/repository-details.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { TopRepositoryDetailsComponent } from './pages/top-repository-details/top-repository-details.component';
import { TopUserDetailsComponent } from './pages/top-user-details/top-user-details.component';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    TopUserByCountryComponent,
    TopRepositoriesComponent,
    RepositoryDetailsComponent,
    HomeComponent,
    UserDetailsComponent,
    TopRepositoryDetailsComponent,
    TopUserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
