import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  iam:any;
constructor(
          private route: ActivatedRoute,
          private router: Router){}
  ngOnInit() {

  }

  logoutUrl="/home";
welcome(user){
alert("hello ramesh "+user.firstName);
this.iam=user.firstName;
this.router.navigate(['/home']);
}
logout(){
this.iam="";
this.logoutUrl = this.route.snapshot.queryParams['logoutUrl'] || '/home';
}
}
