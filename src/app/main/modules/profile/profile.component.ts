import { Component, OnInit } from '@angular/core';
import { IMAGE_MODEL, } from "../../models/image.model";
import { Image, Collection } from "../../interfaces/image.interface";
import { PROFILE_PAGES } from "./models/page.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public pages = PROFILE_PAGES;

  constructor() { }

  ngOnInit() { }

  loadData(event: { target: { complete: () => void; disabled: boolean; }; }) {
    setTimeout(() => {
      console.log(event);
      event.target.complete();

      const data = new Array(4);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
