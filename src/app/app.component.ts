import {Component,} from '@angular/core';
import {AngularFireDatabase}from'angularfire2/database';
import {HeaderComponent}from'./header/header.component';
import {HttpService} from "./http.service";
import {ContentComponent} from "./content/content.component";
import {AllDataComponent} from "./all-data/all-data.component";
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',

  providers:[HttpService],
  Directives:[HeaderComponent,ContentComponent,AllDataComponent],
})
export class AppComponent {
  constructor() {

  }

  ngOnInit(){

  }
}


