import { Component, OnInit } from '@angular/core';
import { PROFILE_MODEL } from '../../models/image.model';
import { PROFILE_PAGES } from './models/page.model';
import { Profile } from '../../interfaces/image.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public pages = PROFILE_PAGES;

  profile: Profile = PROFILE_MODEL[0];

  constructor() {}

  ngOnInit() {}

  loadData(event: { target: { complete: () => void; disabled: boolean } }) {
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
