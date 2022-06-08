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
    axios
      .post(`${env.baseUrl}/${env.graph}`, {
        query: this.graph.allImagesStorage(),
      })
      .then((res) => {
        console.log(res.data.data.allImageStorage);
        this.images = res.data.data.allImageStorage;
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
