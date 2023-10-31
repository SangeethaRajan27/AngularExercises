import { Component } from '@angular/core';
import {OnInit,OnDestroy} from '@angular/core';
import {DoCheck,AfterContentChecked} from '@angular/core';
import {AfterContentInit} from '@angular/core';
import {AfterViewChecked} from '@angular/core';
import {AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//implements means interfaces ; many interfaces can be implemented
export class AppComponent implements OnInit,OnDestroy,DoCheck,
AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  ngOnInit(): void {//step 1
    //write the code for connecting to the backend and fetch data
    var today=new Date();
    console.log("Component getting initialized"+today);
  }
  ngOnDestroy() :void{
    //write the code for connecting to the backend and save data before component gets destroyed
    console.log("Component detroyed at" + new Date());
  }
  ngDoCheck() :void{//step 2 Executed everytime when view changes
    console.log('Overall verification started');
  }
  ngAfterContentChecked() :void{//step 4 Executed everytime when view changes
    console.log('Content verified/checked');
  }
  ngAfterContentInit() :void{//step 3
    console.log('Content initialization completed');
  }
  ngAfterViewChecked() :void{//step 6 Executed everytime when view changes
    console.log('View checking completed');
  }
  ngAfterViewInit() :void{//step 5
    console.log('View initialization completed');
  }
  title = 'componentlifecycle';
  firsname:string='UnKnown';
  lastname:string='UnKnown';
}
/*
Component life cycle=>
Initializing phase => ngOnInit() ; AfterContentInit
Activation pahse => onActivate 
view or display phase => AfterViewInit ; AfterViewChecked
validation phase => ngDoCheck ; AfterContentChecked
updation phase => onUpdate
destroy phase => onDestroy

we use it to debugging and find out which pahse/state the error occurs
it prints for each of the view in same order
*/ 