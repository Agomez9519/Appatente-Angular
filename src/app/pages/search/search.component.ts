import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch= new EventEmitter;

  //Se crea un objeto de tipo FormBuilder para poder crear un formulario reactivo  
  constructor( private fb: FormBuilder,private searchSvc: SearchService) { 
    
  }


  frmSearch= this.fb.group({
    search: ['']
  });

  ngOnInit(): void {
    this.onChange();
    this.searchSvc.getSearch('angular').subscribe(res => {
      console.log(res);
    })
  }

  onChange(){
    this.frmSearch.valueChanges.subscribe(res => {
     this.onSearch.emit(res.search);
    })
  }

}
