import {Component, OnInit,} from '@angular/core';
import {HttpService} from "../http.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[HttpService]
})
export class ContentComponent implements OnInit {
    title:any;
    file:any;
    text:any;
    items:any []=[]=[];

  constructor(private httpService: HttpService){}
  ngOnInit() {
    this.httpService.getFun()
  .subscribe(data =>console.log(data));

  }

  onSubmit(){
    this.httpService.postFunc({title:this.title,file:this.file,text:this.text})
      .subscribe(
        res =>console.log(res));
      this.title=this.file=this.text="";
}
   ongetData(){
      this.httpService.getFunData()
       .subscribe(
        data=>{
          const myArray=[];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items=myArray;
        }
      );
}
}
