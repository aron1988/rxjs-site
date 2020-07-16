// import { Component, OnInit } from '@angular/core';
// import { ViewChild, ElementRef } from '@angular/core';
// import { fromEvent, Observable, pipe } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Subscription } from 'rxjs/internal/Subscription';



// @Component({
//   selector: 'app-input',
//   templateUrl: './input.component.html',
//   styleUrls: ['./input.component.css']
// })
// export class InputComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
  
//   @ViewChild('toTarget', {static:true}) toTarget:ElementRef
//   coutriesInput:HTMLInputElement
//   coutriesInputObs:Observable<Event>





//   ngAfterViewInit() {
//     this.coutriesInput = this.toTarget.nativeElement

//     this.coutriesInputObs = fromEvent(this.coutriesInput, "input").pipe(
//      map(ev => /*ev.target['value']*/ (ev.target as HTMLInputElement).value),

//       ).subscribe(res => console.log(res.target.value));
//   }

// }
