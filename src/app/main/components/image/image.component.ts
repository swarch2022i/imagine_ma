import { Component, Input, OnInit } from '@angular/core';
import {} from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() variable;
  constructor() {}

  ngOnInit() {}

  openComments() {
    console.log('as');
  }
}
