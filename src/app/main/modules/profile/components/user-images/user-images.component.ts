import { Component, OnInit } from '@angular/core';
import { IMAGE_MODEL, } from "../../../../models/image.model";
import { Image } from 'src/app/main/interfaces/image.interface';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss'],
})
export class UserImagesComponent implements OnInit {

  public images: Image[] = IMAGE_MODEL;

  constructor() { }

  ngOnInit() { }

  loadData(e) {
    console.log('load more images');
  }
}
