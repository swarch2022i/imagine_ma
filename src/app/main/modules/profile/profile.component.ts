import { Component, OnInit } from '@angular/core';
import { PROFILE_MODEL } from '../../models/image.model';
import { PROFILE_PAGES } from './models/page.model';
import { Profile } from '../../interfaces/image.interface';
import axios from 'axios';
import { environment as env } from './../../../../environments/environment';
import { GraphService } from 'src/app/shared/graph.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public pages = PROFILE_PAGES;

  profile: Profile = PROFILE_MODEL[0];

  constructor(private graph: GraphService) {}

  async ngOnInit() {
    axios
      .post(`${env.baseUrl}${env.graphPort}/${env.graph}`, {
        query: this.graph.getPerfilByIdUsuario(localStorage.getItem('ID_USER')),
      })
      .then((res) => {
        this.profile = res.data.data.getPerfilByIdUsuario;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadData(event: { target: { complete: () => void; disabled: boolean } }) {
    setTimeout(() => {
      console.log(event);
      event.target.complete();
      const data = new Array(4);
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
