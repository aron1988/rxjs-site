import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
myInterval;
  constructor() { 
    const secondsCounter = interval(1000).pipe(take(5));
// Subscribe to begin publishing values
secondsCounter.subscribe(n =>
  this.myInterval =`It's been ${n} seconds since subscribing!`);
  }

  ngOnInit(): void {
  }

}
