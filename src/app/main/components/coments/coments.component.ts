import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss'],
})
export class ComentsComponent implements OnInit {
  @Input() variable;

  constructor() // TODO preguntar a Johan por que no funciona public routerOutlet: IonRouterOutlet,
  {}

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  }

  async canDissmis() {}

  onClick() {
    console.log('click');
  }
}
