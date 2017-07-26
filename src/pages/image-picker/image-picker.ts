import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html'
})
export class ImagePickerPage {
  private images: Array<string>;
	private grid: Array<Array<string>>;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  	this.images = this.navParams.get('images');
  	this.grid = Array(Math.ceil(this.images.length/2));
  }

  ionViewLoaded() {
  	let rowNum = 0;

  	for (let i = 0; i < this.images.length; i+=2) {
  		this.grid[rowNum] = Array(2);
  		if (this.images[i]) {
  			this.grid[rowNum][0] = this.images[i]
  		}
  		if (this.images[i+1]) {
  			this.grid[rowNum][1] = this.images[i+1]
  		}
  		rowNum++;
  	}
  }
}
