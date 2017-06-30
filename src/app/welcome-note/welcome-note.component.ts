import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-note',
  templateUrl: './welcome-note.component.html',
  styleUrls: ['./welcome-note.component.css']
})
export class WelcomeNoteComponent implements OnInit {
public welcomehide=true;
public whatWeDo=["We design IT project and Provide solutions.",
					"We work on you project ideas and make product ready.",
					"We build projects, change it as per requerements and cell ",
					"We train students on various Technologies,  Languages and Tools.",
					"Arrange guest lectures from the experties.",
					"Deliever Project Knowladge by conducting various lectures."
					
				]
  constructor() { }

  ngOnInit() {
  }

}
