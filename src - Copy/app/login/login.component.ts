
import { Component, OnInit} from '@angular/core';
//import {Popup} from 'ng2-opd-popup';
import { PopupformsComponent } from '../popupforms/popupforms.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends PopupformsComponent implements OnInit {

 
ngOnInit() {
  }
  
}



