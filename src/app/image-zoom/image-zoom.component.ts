import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent implements OnInit {

	previewImg = "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg";
	fullImg = "https://via.placeholder.com/2000";

  constructor() { }

  ngOnInit() {

  }

}
