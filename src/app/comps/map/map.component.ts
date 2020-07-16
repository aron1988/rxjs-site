import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  result;
  resultTimeout;
  constructor() {
 
let nums2 = of(1, 2, 3).pipe(
  map((val: number) => val * val)
)
nums2.subscribe(x => this.result = x);

nums2.subscribe(y => setTimeout(() =>{
  this.resultTimeout = y
},2000)) 


   }

  ngOnInit(): void {
  }
  

}
