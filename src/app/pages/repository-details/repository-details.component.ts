import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RepositoryModel} from '../../model/repositoryModel';
import {ApiService} from '../../service/api-service.service';
import {UserModel} from '../../model/userModel';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {
  repositoryId: number;
  repositoryModel: RepositoryModel;
  repositoryModelList: RepositoryModel[];
  // userListModel: UserModel[];
  // userModel: UserModel;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.repositoryModel = new RepositoryModel();
    this.repositoryModelList = new Array<RepositoryModel>();
    console.log('reached details');
  }

  ngOnInit(): void {
    console.log('init model',this.apiService.repositoryListModel);
    // this.repositoryId = Number(this.route.snapshot.paramMap.get("repositoryId"));
    this.route.params.subscribe(params => {
      this.getRepositoryDetails(+params['repositoryId']);
    });
    // this.getRepositoryDetails(this.repositoryId);

  }

  getRepositoryDetails(repoId){

    if(this.apiService.repositoryListModel == undefined){
      this.apiService.searchRepository(localStorage.getItem('user-repo'))
        .subscribe(
          result => {
            this.repositoryModelList = result['items'];
            this.apiService.repositoryListModel = this.repositoryModelList;
            this.repositoryModel = this.apiService.repositoryListModel.find(f => f.id == repoId);
          },
          error => console.log(error)
        );
    }else {
      this.repositoryModel = this.apiService.repositoryListModel.find(f => f.id == repoId);
    }
    // this.repositoryModelList = this.apiService.repositoryListModel;
    // this.repositoryModel = this.apiService.repositoryListModel.find(f => f.id == repoId)
    // this.repositoryModel = JSON.parse(localStorage.getItem('repoModel')).find(f => f.id == repoId);
  }

}
