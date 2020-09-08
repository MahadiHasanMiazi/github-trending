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
    this.userListModel = new Array<UserModel>()
    console.log('reached details');
  }

  ngOnInit(): void {
    console.log('init model',this.apiService.repositoryListModel);
    this.route.params.subscribe(params => {
      console.log(params);
      console.log('url id',+params['userId']);
      this.getRepositoryDetails(+params['userId']);
    });
    // this.getRepositoryDetails(this.repositoryId);

  }

  getRepositoryDetails(repoId){
    // this.userListModel = this.apiService.repositoryListModel;
    // this.repositoryModel = this.apiService.repositoryListModel.find(f => f.id == repoId)
    this.userModel = JSON.parse(localStorage.getItem('userModel')).find(f => f.id == repoId);
  }


}
