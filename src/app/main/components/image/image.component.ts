import { Image } from './../../interfaces/image.interface';
import { Component, Input, OnInit } from '@angular/core';
import {} from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
  constructor() {}

  ngOnInit() {}

  openComments() {
    console.log('as');
  }

  onClick() {
    console.log('Click on comment');
  }
}
