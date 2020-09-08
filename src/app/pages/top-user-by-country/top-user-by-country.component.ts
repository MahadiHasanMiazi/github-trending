import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api-service.service';

@Component({
  selector: 'app-top-user-by-country',
  templateUrl: './top-user-by-country.component.html',
  styleUrls: ['./top-user-by-country.component.css']
})
export class TopUserByCountryComponent implements OnInit {

  public topRepository: any = '';
  country: string = '';
  config:any;

  constructor(private apiService: ApiService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalUser: this.topRepository.length,
    };

  }
  ngOnInit(): void {
    this.topUser('bangladesh');
  }
  topUser(country) {
    this.apiService.topUserByCountry(country)
      .subscribe(
        result => {
          this.topRepository = result['items'];
          console.log(this.topRepository);
          localStorage.setItem('topUserModel', JSON.stringify(this.topRepository));
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
