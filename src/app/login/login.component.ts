
import { Component, OnInit,ViewChild} from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public someProperty=true;

  constructor() {  
  }
    

  ngOnInit() {
  }

closeForm(){
	this.someProperty=false;
}

  
  
}
