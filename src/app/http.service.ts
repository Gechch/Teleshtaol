import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Response, Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable()
export class HttpService {
  constructor(private http:HttpClient) { }

postFunc (postData :any) {
  const body = JSON.stringify(postData);
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('https://telshtaol.firebaseio.com/dat.json', body,{headers:headers})
    .map((data:Response)=>data.json());
  }

  getFun( ){
    return this.http.get("https://telshtaol.firebaseio.com/dat.json");

  }

  getFunData( ){
    return this.http.get("https://telshtaol.firebaseio.com/dat.json");
   .map((response:Response)=>response.json());

  }
}

