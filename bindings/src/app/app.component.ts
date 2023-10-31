import { Component } from '@angular/core';
import {UserData} from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindings';
  themeName : string ='cloud';//At starting this will be displayed in select field
  color:string='violet';
  applycolor:string='red';
  size:number=100;

  firstname:string='';
  lastname:string='';
  enableDisable:boolean=false;
  enablereset:boolean=false;

  userDetails:string[]=[];
  // saveData(event:Event){
  //   this.userDetails.push(this.firstname);//to access any fields we should use this operator
  //   this.userDetails.push(this.lastname);
  //   console.log("Added data to the array");
  //   console.log(this.userDetails);
  // }
  
  // checkData(){
  //   //console.log(event.target);
  //   console.log(this.firstname.length);//every time i change the value of firstname it should print the length of it
  // }
  sendData(){
    console.log("Sending data to Express backend.")
    //code for final validation
    //code for communicating with backend
  }

  //creating object for userdata class
  udata:UserData=new UserData();//udata is object
  userslist:UserData[]=[];//Array of userdata objects;objects of userdata class
  saveData(event:Event){
    this.userslist.push(this.udata);//to access any fields we should use this operator
    console.log("Added data to the array");
    console.log(this.udata);
    this.udata=new UserData();
  }
  checkData(){
    //console.log(event.target);
    console.log(this.udata.firstname.length);//every time i change the value of firstname it should print the length of it
  }

  statename:string='AP';
}
