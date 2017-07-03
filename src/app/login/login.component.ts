
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthenticateService } from '../services/authenticate.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticateService,AlertService]

})
export class LoginComponent implements OnInit {

 public someProperty=true;

 model: any = {};
 returnUrl: string;
 returnSuccess:string="/user"

 constructor(
          private route: ActivatedRoute,
         private router: Router,
         private authenticateService: AuthenticateService,
         private alertService: AlertService
) {}

ngOnInit() {
        // reset login status
        this.authenticateService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

closeForm(event){
	event.preventDefault();
	this.someProperty=false;

}
Login(){
	this.authenticateService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                this.returnSuccess = this.route.snapshot.queryParams['returnSuccess'] || '/user';
                    this.alertService.success("Login successful");
                    this.router.navigate([this.returnSuccess]);
                },
                error => {
                    this.alertService.error(error);

                });
}



}
