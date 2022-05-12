import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  public readonly form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [Validators.minLength(1)]),
    tag: new FormControl('', [Validators.minLength(1)]),
  });
  public loadImage = false;
  public tags: string[] = [];

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  public uploadImageFromGallery() {
    console.log('works');
    this.loadImage = true;
  }

  public publish() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.presentAlert();
    }
    console.log(this.form.value);
  }

  public addTag() {
    this.tags.push(this.form.value.tag);
    console.log(this.tags);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Title',
      message: 'Plase write a title',
      buttons: ['OK'],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
