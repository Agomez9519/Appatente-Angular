import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-allcard',
  templateUrl: './allcard.component.html',
  styleUrls: ['./allcard.component.scss']
})
export class AllcardComponent implements OnInit {

  @Input('vehiculo') vehiculo: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
