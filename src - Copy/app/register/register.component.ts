

import { Component, OnInit} from '@angular/core';
//import {Popup} from 'ng2-opd-popup';
import { PopupformsComponent } from '../popupforms/popupforms.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends PopupformsComponent implements OnInit {

ngOnInit() {
  }
}

