import { Image } from './../../interfaces/image.interface';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment as env } from './../../../../environments/environment';
import { GraphService } from 'src/app/shared/graph.service';
import { IMAGE_MODEL } from '../../models/image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: Image[] = [];
  // images: Image[] = IMAGE_MODEL;
  showImages = false;
  constructor(private graph: GraphService) {}

  async ngOnInit() {
    this.showImages = false;
    console.log(this.images);
    axios
      .post(`${env.baseUrl}${env.graphPort}/${env.graph}`, {
        query: this.graph.allImages(),
      })
      .then((res) => {
        console.log(res.data.data.allImages);
        this.images = res.data.data.allImages;
      })
      .catch((error) => {
        console.error(error);
      });
    if (this.images.length > 0) {
      this.showImages = true;
    }
  }

  loadData(event) {
    console.log('load');
  }
}
