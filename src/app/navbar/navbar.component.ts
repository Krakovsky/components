import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public navbarNamesPages = [
		{
			name: "Main",
			path: "/"
		},
		{
			name: "About",
			path: "/about"
		},
		{
			name: "Contacts",
			path: "/contacts"
		},
	];

  constructor() { }

  ngOnInit() {
  }

}
