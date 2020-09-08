import {Component, OnChanges, OnInit} from '@angular/core';
import {ApiService} from '../../service/api-service.service';
import {RepositoryModel} from '../../model/repositoryModel';

@Component({
  selector: 'app-top-repositories',
  templateUrl: './top-repositories.component.html',
  styleUrls: ['./top-repositories.component.css']
})
export class TopRepositoriesComponent implements OnInit {
  public topRepository: any = '';
  country: string = '';
  config:any;

  constructor(private apiService: ApiService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.topRepository.length
    };
  }
  ngOnInit(): void {
    this.topRepositories();
  }
  topRepositories() {
    this.apiService.topRepositories()
      .subscribe(
        result => {
          this.topRepository = result['items'];
          localStorage.setItem('topRepoModel', JSON.stringify(this.topRepository));
        },
        error => console.log(error)
      );
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
