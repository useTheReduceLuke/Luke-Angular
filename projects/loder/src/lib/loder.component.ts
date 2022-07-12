import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-LODer',
	template: `
	`,
	styles: []
})
export class LODerComponent implements OnInit {

	constructor() { }

	ngOnInit() {

		var canvas = document.getElementById("canvas");
		var img = new Image();

		img.onload = function () {

			var width = img.naturalWidth;
			var height = img.naturalHeight;

			let newWidth = width / 2;
			let newHeight = height / 2;

			var canvas = document.createElement("canvas");
			canvas.width = width;
			canvas.height = height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0, width, height);
			//following two lines saves the image
			var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  
			window.location.href=image;
		}
	}
}
