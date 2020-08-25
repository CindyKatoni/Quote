import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Maya Angelou', 'I love to see a young girl go out and grab the world by the lapels.', 'CK'),
    new Quote(2, 'Anais Nin', 'Life shrinks or expands in proportion to one’s courage.', 'CK'),
  ]

  showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }
  // constructor() { 

  // }

  ngOnInit() {
  }

}
