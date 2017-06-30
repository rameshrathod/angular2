

import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthenticateService } from '../services/authenticate.service';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
public someProperty=true;

  model: any = {};
ngOnInit(){}
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
    
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                });
    }

closeForm(event){
	event.preventDefault();
	this.someProperty=false;
}
}
