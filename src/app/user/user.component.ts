
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../services/user.service';

@Component({
selector: 'app-user',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
@Output()
 send = new EventEmitter();
currentUser: User;
users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.send.emit(this.currentUser);
        this.userService.getAll().subscribe(users => {
        this.users = users;

         });
    }

}
