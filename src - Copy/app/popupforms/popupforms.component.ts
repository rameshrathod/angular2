
import { Component, OnInit,ViewChild,Input, Output, EventEmitter } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-popupforms',
  templateUrl: './popupforms.component.html',
  styleUrls: ['./popupforms.component.css']
})
export class PopupformsComponent implements OnInit {

@ViewChild('RegisterPopupForm') RegisterPopupForm: Popup;
@ViewChild('loginPopupForm') loginPopupForm: Popup;


public loginFormActiveClass=true;
public registerFormActiveClass=false;
public register=false;
public login=true;
public hideExtraAnchor=true;
public loginwindowvisible=true;
public registerwindowvisible=false;
public re=false;
	
	@Output()
  pageChanged = new EventEmitter<any>();

  constructor() {  
  }
    

  ngOnInit() {
  }

  ClickButton(){
  //alert(loginvalue);
    this.re=true;
  	this.loginPopupForm.options = {
    //header: "",
    //color: "#5cb85c", // red, blue.... 
    widthProsentage: 30, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: false, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-primary", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" //fadeInDown" 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};
    this.pageChanged.emit(this.RegisterPopupForm.hide());
    this.pageChanged.emit(this.loginPopupForm.show(this.loginPopupForm.options));


    
  }

  closeLoginFrom(){
      this.loginwindowvisible=true;
  		this.pageChanged.emit(this.loginPopupForm.hide());
      this.registerwindowvisible=false;


    
  }

  loginAddActiveClass(){
 		 this.registerwindowvisible=false;
  		this.loginwindowvisible=true;
  		
  		this.login=true;
  		
  		this.hideExtraAnchor=false;
  		this.loginFormActiveClass=true;//added class as active for css change
  		this.registerFormActiveClass=false;//added class as inactive for css change

 		

  }
  registerAddActiveClass(){
  		this.loginwindowvisible=false;
  		this.registerwindowvisible=true;
  		this.register=true;
  		this.loginFormActiveClass=false;//added class as inactive for css change
  		this.registerFormActiveClass=true;//added class as active for css change
  		
  		
  }
  ClickButton1(){

  	this.RegisterPopupForm.options = {
    //header: "",
    //color: "#5cb85c", // red, blue.... 
    widthProsentage: 30, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: false, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-primary", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" //fadeInDown" 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};	
	 this.pageChanged.emit(this.loginPopupForm.hide());
    this.pageChanged.emit(this.RegisterPopupForm.show(this.RegisterPopupForm.options));
  }

  closeRegisterFrom(){
      this.loginwindowvisible=true;
      this.registerwindowvisible=false;
  		this.pageChanged.emit(this.RegisterPopupForm.hide());
  }
}
