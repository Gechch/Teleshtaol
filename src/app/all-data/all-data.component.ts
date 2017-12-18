import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Response,Http} from '@angular/http'
@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css'],
})
export class AllDataComponent  {
  items:any=[];

  constructor(private httpService:HttpService) {
  }




}
