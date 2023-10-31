import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingassignment',
  templateUrl: './bindingassignment.component.html',
  styleUrls: ['./bindingassignment.component.css']
})
export class BindingassignmentComponent {
  firstName:string='sangee';
  lastName:string='rajan';
  states:string='';
  selectedState: string = 'TamilNadu';  // Model for the selected state
  selectedCity: string = 'Chennai';   // Model for the selected city
  // favoriteTheme:string='red';
  // states = ['California', 'Texas', 'Florida', 'New York', 'Illinois'];
  // cities = {
  //   California: ['Los Angeles', 'San Francisco', 'San Diego'],
  //   Texas: ['Houston', 'Dallas', 'Austin'],
  //   Florida: ['Miami', 'Orlando', 'Tampa'],
  //   NewYork: ['New York City', 'Buffalo', 'Rochester'],
  //   Illinois: ['Chicago', 'Aurora', 'Springfield'],
  // };
  // selectedState='';
}
