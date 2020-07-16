import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
arr = ["from","ajax","from-event","interval","map","pip"]
  constructor() { }

  ngOnInit(): void {
  }

}
