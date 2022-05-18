import { Image } from './../../interfaces/image.interface';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment as env } from './../../../../environments/environment';
import { queries } from 'src/app/shared/queries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: Image[] = [];
  constructor() {}

  async ngOnInit() {
    axios
      .post(`${env.baseUrl}${env.graphPort}/${env.graph}`, {
        query: queries.allImages,
      })
      .then((res) => {
        console.log(res.data.data.allImages);
        this.images = res.data.data.allImages;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadData(event) {
    console.log('load');
  }
}
