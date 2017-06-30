import { Component, OnInit } from '@angular/core';
import { UrlnavigationshowService } from '../urlnavigationshow.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
  providers: [UrlnavigationshowService]
})
export class NavigatorComponent implements OnInit {

  constructor(private location: Location,private _router: Router,private _urlnavigationshowService:UrlnavigationshowService) { 
  console.log("location"+location);
} 

    ngOnInit() {
        let currentUrl = this._router.url; /// this will give you current url
			console.log("hello "+currentUrl);
        // your logic to know if its my home page.
    }

  goBack(my): void {
            //this.location.back();
			//console.log(" value is :"+ this.location.path());
			alert(this._urlnavigationshowService.someMethod(my));
        }

}
