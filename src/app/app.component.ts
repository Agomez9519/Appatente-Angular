import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesI } from './interfaces/wiki';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'api-wiki';
  articles$!:Observable<ArticlesI[]>;

  constructor(
    private searchSvc: SearchService
  ){ }

  onSearch(search:string){
     this.articles$=this.searchSvc.getSearch(search);
     console.log(this.articles$);

  }
}
