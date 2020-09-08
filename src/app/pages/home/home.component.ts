import { Component, OnInit } from '@angular/core';
import {RepositoryModel} from '../../model/repositoryModel';
import {ApiService} from '../../service/api-service.service';
import {UserModel} from '../../model/userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputKey: string = '';
  repositoryListModel: RepositoryModel[];
  userListModel: UserModel[];
  tabColorUser:string = '#A0A0A0';
  tabColorRepo:string;
  tabValue: string = '';
  config: any;

  constructor(private apiService: ApiService) {
    this.repositoryListModel = new Array<RepositoryModel>();
    this.userListModel = new Array<UserModel>();

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.userListModel.length
    };


  }
  ngOnInit(): void {
  }
  searchByUser() {
    this.apiService.searchUser(this.inputKey)
      .subscribe(
        result => {
          this.userListModel = result['items'];
          // this.apiService.repositoryListModel = this.userListModel;
          localStorage.setItem('userModel', JSON.stringify(this.userListModel));
        },
        error => console.log(error)
      );
    this.apiService.searchRepository(this.inputKey)
      .subscribe(
        result => {
          this.repositoryListModel = result['items'];
          console.log(this.repositoryListModel);
          localStorage.setItem('repoModel', JSON.stringify(this.repositoryListModel));
        },
        error => console.log(error)
      );
  }

  selectTab(tabKey){
    if(tabKey === 'user'){
      this.tabColorUser = '#A0A0A0';
      this.tabColorRepo = '';
      this.tabValue = 'user'
    }
    if(tabKey === 'repo'){
      this.tabColorRepo = '#A0A0A0';
      this.tabColorUser = '';
      this.tabValue = 'repo'
    }
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
