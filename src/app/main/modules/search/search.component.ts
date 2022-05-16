import { Image } from './../../interfaces/image.interface';
import { queries } from './../../../shared/queries';
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
  constructor() {}

  ngOnInit() {}

  public onSearchChange(event) {
    const value = event.detail.value;

    if (value === '') {
      return;
    }

    //tag ---> #
    if (value.includes('#')) {
      console.log(`${env.baseUrl}${env.graphPort}/${env.graph}`);
      console.log('is tag');
      axios
        .post(`${env.baseUrl}${env.graphPort}/${env.graph}`, {
          query: queries.imageByTag,
          variables: {
            tag: value.substring(1),
          },
        })
        .then((res) => {
          this.images = res.data.data.imageByTag;
          console.log(res.data.data.imageByTag);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    //user ---> @
    if (value.includes('@')) {
      console.log('is user');
    }

    console.log(event.detail.value);
  }
}
