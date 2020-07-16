import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {


  constructor() { 
    const data = from(fetch('https://raw.githubusercontent.com/AsherLecover/DB-ajax/master/db.json'));
  data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
  }

  ngOnInit(): void {
  }
  


}
