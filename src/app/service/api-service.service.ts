import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {RepositoryModel} from '../model/repositoryModel';
import {UserModel} from '../model/userModel';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  repositoryListModel: RepositoryModel[];
  userListModel: UserModel[];

  repositoryId: number;

  API_BASE_URL: string;
  headers = new HttpHeaders({
    'content-type': 'application/json', 'Accept': '*/*'
  });
  options = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {
    this.API_BASE_URL = 'https://api.github.com/';

  }

  searchUser(usernamme: string) {

    return this.http.get(this.API_BASE_URL + 'search/users?q=' + usernamme, this.options);
  }
  searchRepository(usernamme: string){
    return this.http.get(this.API_BASE_URL + 'search/repositories?q=' + usernamme, this.options);
  }

  topUserByCountry(country: string) {
    return this.http.get(this.API_BASE_URL + 'search/users?q=location:'+ country +'+'+ 'followers:>1000' , this.options);
  }
  topRepositories(){
    return this.http.get(this.API_BASE_URL + 'search/repositories?q=stars:>1000' , this.options);
  }


}
