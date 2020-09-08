import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopUserByCountryComponent} from './pages/top-user-by-country/top-user-by-country.component';
import {TopRepositoriesComponent} from './pages/top-repositories/top-repositories.component';
import {RepositoryDetailsComponent} from './pages/repository-details/repository-details.component';
import {HomeComponent} from './pages/home/home.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {TopUserDetailsComponent} from './pages/top-user-details/top-user-details.component';
import {TopRepositoryDetailsComponent} from './pages/top-repository-details/top-repository-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'top-user', component: TopUserByCountryComponent},
  {path: 'top-repository', component: TopRepositoriesComponent},
  {path: 'repository-details/:repositoryId', component: RepositoryDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'top-user-details/:userId', component: TopUserDetailsComponent},
  {path: 'top-repository-details/:repositoryId', component: TopRepositoryDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
