import { Component, OnInit } from '@angular/core';
import {RepositoryModel} from '../../model/repositoryModel';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../service/api-service.service';

@Component({
  selector: 'app-top-repository-details',
  templateUrl: './top-repository-details.component.html',
  styleUrls: ['./top-repository-details.component.css']
})
export class TopRepositoryDetailsComponent implements OnInit {
  repositoryModel: RepositoryModel;
  repositoryModelList: RepositoryModel[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.repositoryModel = new RepositoryModel();
    this.repositoryModelList = new Array<RepositoryModel>();

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getRepositoryDetails(+params['repositoryId']);
    });
  }
  getRepositoryDetails(repoId){
    if(this.apiService.repositoryListModel == undefined){
      this.apiService.topRepositories()
        .subscribe(
          result => {
            this.repositoryModelList = result['items'];
            this.apiService.repositoryListModel = this.repositoryModelList;
            this.repositoryModel = this.apiService.repositoryListModel.find(f=>f.id == repoId);
            // localStorage.setItem('topRepoModel', JSON.stringify(this.topRepository));
          },
          error => console.log(error)
        );
    }else{
      this.repositoryModel = this.apiService.repositoryListModel.find(f => f.id == repoId);
      // this.repositoryModel = JSON.parse(localStorage.getItem('topRepoModel')).find(f => f.id == repoId);
    }
  }


}
