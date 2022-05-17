import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(
    // TODO preguntar Johan por que no funciona public routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
    /* TODO document why this method 'ngOnInit' is empty */
  }

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
