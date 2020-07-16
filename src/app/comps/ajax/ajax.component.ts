import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  respons;
  status;

  constructor() { 

// Create an Observable that will create an AJAX request
const apiData = ajax('https://raw.githubusercontent.com/AsherLecover/DB-ajax/master/db.json');
// Subscribe to create the request
apiData.subscribe(res => {return this.status = res.status ,this.respons = res.response});
  }

  ngOnInit(): void {
  }

}
