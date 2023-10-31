import { Component } from '@angular/core';

//controller logic

@Component({
  selector: 'app-root',
  //this is external html we can use when you have lot of code
  // templateUrl: './app.component.html',

  // we can also give templates like below; when we have only short lines of code
  template:'<div style="color:magenta"><b>Welcome to Angular</b><u>Introduction to Angular</u></div>',
  styleUrls: ['./app.component.css'],//we only follow external style sheet
  styles:['b{color:blue}','div{color:cyan}']//internal style sheet
})

//modal
export class AppComponent {
  title = 'First Website in Angular';
  name:string='Sangeetha';
}


