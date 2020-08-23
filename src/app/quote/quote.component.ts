import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("ANC","Julius Malema","Mama give us a sign"),
  new Quote("Lupita","Black Panther","Wakanda Forever")]
    preNum:number
    lastNum:number
    counter:number
    
  constructor() { }

  ngOnInit(): void {
  }

}
