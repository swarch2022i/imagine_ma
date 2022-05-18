import { Router } from '@angular/router';
import { AuthService } from './../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { APP_PAGES } from './models/pages.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  pages = APP_PAGES;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  public logout() {
    this.auth.signout();
    this.router.navigate(['/auth']);
  }
}
