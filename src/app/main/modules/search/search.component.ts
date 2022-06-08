import { GraphService } from './../../../shared/graph.service';
import { AlertController } from '@ionic/angular';
import { Image } from './../../interfaces/image.interface';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment as env } from './../../../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public images: Image[] = [];
  public showEmptyList = false;
  constructor(
    private alertController: AlertController,
    private graph: GraphService
  ) {}

  ngOnInit() {}

  public onSearchChange(event) {
    this.showEmptyList = false;
    const value = event.detail.value;

    if (value === '') {
      return;
    }

    //tag ---> #
    console.log(this.graph.imageByTag(value.substring(1)));
    if (value.includes('#')) {
      axios
        .post(`${env.baseUrl}/${env.graph}`, {
          query: this.graph.imageByTag(value.substring(1)),
        })
        .then((res) => {
          console.log(res);
          if (res.data.data.imageByTag.length > 0) {
            this.images = res.data.data.imageByTag;
          } else {
            this.showEmptyList = true;
          }
        })
        .catch((error) => {
          this.showEmptyList = true;
          console.error(error);
        });
      return;
    }

    //user ---> @
    if (value.includes('@')) {
      console.log('is user');
      return;
    }

    //search by name
    axios
      .post(`${env.baseUrl}/${env.graph}`, {
        query: this.graph.imageByName(value),
      })
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          this.images = res.data.data.imageByName;
          console.log(this.images);
        } else {
          this.showEmptyList = true;
        }
      })
      .catch((error) => {
        this.showEmptyList = true;
        console.error(error);
      });
    return;
  }
}
