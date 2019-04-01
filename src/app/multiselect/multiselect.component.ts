import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

	nameCities = [
		{cityName: "Kherson"},
		{cityName: "Kiev"},
		{cityName: "Odessa"},
		{cityName: "Lviv"},
		{cityName: "Zhytomyr"},
		{cityName: "Zaporizhzhia"},
	];

	onChange(newValue) {
		console.log(newValue);
	}

  constructor() { }

  ngOnInit() {
  }

}
