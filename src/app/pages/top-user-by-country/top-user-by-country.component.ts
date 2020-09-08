import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api-service.service';
import {UserModel} from '../../model/userModel';

@Component({
  selector: 'app-top-user-by-country',
  templateUrl: './top-user-by-country.component.html',
  styleUrls: ['./top-user-by-country.component.css']
})
export class TopUserByCountryComponent implements OnInit {

  topUserList: UserModel[];
  country: string = '';
  config:any;

  constructor(private apiService: ApiService) {
    this.topUserList = new Array<UserModel>()
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalUser: this.topUserList.length,
    };

  }
  ngOnInit(): void {
    this.topUser('bangladesh');
  }
  topUser(country) {
    localStorage.setItem('country', country);
    this.apiService.topUserByCountry(country)
      .subscribe(
        result => {
          this.topUserList = result['items'];
          console.log(this.topUserList);
          this.apiService.userListModel = this.topUserList;
          // localStorage.setItem('topUserModel', JSON.stringify(this.topUserList));
        },
        error => console.log(error)
      );
  }

  selectCountry(event){
    this.country = event.target.value;
    this.topUser(this.country)

  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
