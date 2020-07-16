import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';



@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { 
   
const squareOdd = of(1, 2, 3, 4, 5)
.pipe(
  filter(n => n % 2 !== 0),
  map(n => n * n)
);

// Subscribe to get values
squareOdd.subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  }

}
