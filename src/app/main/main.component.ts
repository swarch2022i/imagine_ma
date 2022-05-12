import { Component, OnInit } from '@angular/core';
import { APP_PAGES } from './models/pages.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  pages = APP_PAGES;
  constructor() {}

  ngOnInit() {}
  onClick() {
    console.log('hola');
  }
}
