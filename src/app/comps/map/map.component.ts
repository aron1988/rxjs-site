import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() {
    
// let nums = of(1, 2, 3);
// // console.log(`nums is ${typeof(nums)}`);


// const squareValues = map((val: number) => val * val);
// // console.log(typeof(squareValues));

// const squaredNums = squareValues(nums);
// // console.log(typeof(squaredNums));


// squaredNums.subscribe(x => console.log(typeof(x),x));
// ***************************************************************************
let nums2 = of(1, 2, 3).pipe(
  map((val: number) => val * val)
)
nums2.subscribe(x => console.log(typeof(x),x));

nums2.subscribe(x => setTimeout(() =>{
  console.log(x)
},2000)) 


   }

  ngOnInit(): void {
  }
  

}
