import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../service/api-service.service';
import {RepositoryModel} from '../../model/repositoryModel';
import {UserModel} from '../../model/userModel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  repositoryId: number;
  userModel: UserModel;
  userListModel: UserModel[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.userModel = new UserModel();
    this.userListModel = new Array<UserModel>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getRepositoryDetails(+params['userId']);
    });
  }

  getRepositoryDetails(repoId){
    if(this.apiService.userListModel == undefined){
      this.apiService.searchUser(localStorage.getItem('user-repo'))
        .subscribe(
          result => {
            console.log('hello')
            this.userListModel = result['items'];
            this.apiService.userListModel = this.userListModel;
            this.userModel = this.apiService.userListModel.find(f => f.id == repoId)
          },
          error => console.log(error)
        );
    } else {
      this.userModel = this.apiService.userListModel.find(f => f.id == repoId)
    }
  }


}
