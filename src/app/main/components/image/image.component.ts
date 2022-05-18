import { Image } from './../../interfaces/image.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComentsComponent } from '../coments/coments.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() image: Image;

  constructor(public modalControler: ModalController) {}

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  }

  async presentComents() {
    const modal = await this.modalControler.create({
      component: ComentsComponent,
      componentProps: {
        variable: 'esto es una puta variable',
      },
      breakpoints: [0, 0.2, 0.6, 0.8, 1],
      cssClass: 'modal-coments',
      backdropBreakpoint: 0.2,
      initialBreakpoint: 1,
      showBackdrop: true,
      animated: true,
      handle: true,
      backdropDismiss: false,
    });
    return modal.present();
  }
}
