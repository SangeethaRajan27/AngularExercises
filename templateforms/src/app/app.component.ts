import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateforms';
  userList:any=[];
  addUser(udata:any){ //add user of any type
    console.log(udata);
    console.log(udata.value);
    this.userList.push(udata.value);
  }
}
