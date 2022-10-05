import { Component, Input, OnInit } from '@angular/core';
import { ArticlesI } from 'src/app/interfaces/wiki';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Input() article!: ArticlesI;

  constructor() { }

  ngOnInit(): void {
  }

}
