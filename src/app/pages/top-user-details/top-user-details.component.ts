import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../service/api-service.service';
import {UserModel} from '../../model/userModel';

@Component({
  selector: 'app-top-user-details',
  templateUrl: './top-user-details.component.html',
  styleUrls: ['./top-user-details.component.css']
})
export class TopUserDetailsComponent implements OnInit {

  userModel: UserModel;
  userListModel: UserModel[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.userModel = new UserModel();
    this.userListModel = new Array<UserModel>()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log('url id',+params['userId']);
      this.getTopUserDetails(+params['userId']);
    });
  }

  getTopUserDetails(userId){
    if(this.apiService.userListModel == undefined) {
      this.apiService.topUserByCountry(localStorage.getItem('country'))
        .subscribe(
          result => {
            this.userListModel = result['items'];
            this.apiService.userListModel = this.userListModel;
            this.userModel = this.apiService.userListModel.find(f => f.id == userId);
            // localStorage.setItem('topUserModel', JSON.stringify(this.topUserList));
          },
          error => console.log(error)
        );
    }else {
      this.userModel = this.apiService.userListModel.find(f => f.id == userId);
      // this.userModel = JSON.parse(localStorage.getItem('topUserModel')).find(f => f.id == userId);
    }
  }

}
