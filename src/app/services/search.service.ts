import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticlesI, Wiki } from '../interfaces/wiki';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
//Se crea un objeto de tipo HttpClient para poder hacer peticiones HTTP
  constructor(
    private readonly http: HttpClient
  ) { }

  //un observable es un objeto que se puede subscribir para obtener datos(Es un contenedor de informacion)
  getSearch(search:string):Observable<ArticlesI[]>{
    //params es un objeto que se le pasa como parametro a la peticion HTTP
    const params={
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch:search,
      srlimit:'10',
      utf8:'1',
      origin:'*'  
    }
    return this.http.get<Wiki>(environment.api,{params}).pipe(
      map(res => res.query.search)
    )    
  }
  
}
