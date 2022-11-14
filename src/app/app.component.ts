import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { ArticlesI } from './interfaces/wiki';
import { SearchService } from './services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Apptente';
  articles$!:Observable<ArticlesI[]>;

  constructor(
    private searchSvc: SearchService,
    private authSvc: AuthService
  ){ }

  onSearch(search:string){
     this.articles$=this.searchSvc.getSearch(search);
     console.log(this.articles$);

  }
}
