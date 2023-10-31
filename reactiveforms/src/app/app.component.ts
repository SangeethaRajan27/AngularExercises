import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
// import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  userList : any =[];
  addUser(){
    if(this.userForm.valid){
    console.log(this.userForm.value);
    this.userList.push(this.userForm.value);
  }
  else{
    console.log('Validation error');
  }
}
// editUser(userIndex: number) {
//   this.editingIndex = userIndex;
//   const userData = this.userList[userIndex];
//   this.userForm.setValue(userData);
// }
// updateUser() {
//   if (this.userForm.valid && this.editingIndex !== null) {
//     const updatedUser = this.userForm.value;
//     this.userList[this.editingIndex] = updatedUser;
//     this.userForm.reset();
//     this.editingIndex = null;
//   }
// }
deleteUser(userIndex: number) {
  this.userList.splice(userIndex, 1);
}
isupdate:boolean =false;
currentIndex :any;
edit(user :any,index:any){
  this.isupdate =true;
  this.currentIndex=index;
  this.userForm.setValue(user);
}
update(){
  this.userList[this.currentIndex] =this.userForm.value;
  this.isupdate =false;
}
//formgroup represents form;form control represents input item in the form
//minlength and maxlegth is used for strings
//min and max used for numeric fields
  userForm : any =new FormGroup({
    //formControlName="lastName" ==formControlName="lastName" lastname should be same
    firstName : new FormControl('unknown', [Validators.required,Validators.minLength(5), Validators.maxLength(50)]),
    lastName : new FormControl('Unknown', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    joinDate : new FormControl
    ('2020-03-01',[Validators.required]),
    salary : new FormControl
    (30000, [Validators.required, Validators.min(30000), Validators.max(1000000)])
  },
  {
    // updateOn:'submit' //change or blur or submit
    updateOn:'change'

  }
  );

  /* userform=new formgroup({
    <definition of the fields in the model and also respective validations
    <firldname1>:new formcontrol
    <initial value,<validations>
  }
  {
    //Timing of validations
    updateOn:'submit'
  },
  )
  */

}
