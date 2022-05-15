import { queries } from '../../../shared/queries';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { environment as env } from './../../../../environments/environment';
import { USER } from '../../models/user.model';
import axios from 'axios';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  randomColor = ['success', 'warning', 'danger'];
  color = 'success';
  url = '';
  enableUploadButton = false;
  file;
  public readonly form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    tag: new FormControl('', [Validators.minLength(1)]),
  });
  public loadImage = false;
  public tags: string[] = [];
  public showButton = true;
  private user = USER;

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  public uploadImageFromGallery(e): void {
    this.file = e.target.files[0];
    this.url = URL.createObjectURL(e.target.files[0]);
    this.showButton = false;
  }

  public publish() {
    //example
    // axios
    //   .post(env.baseUrl, {
    //     query: queries.commentsByImageId,
    //     variables: {
    //       imageID: '6255f4604fc97a51fc3ca742',
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //validation
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.presentAlert();
      return;
    }
    if (this.url === '') {
      return;
    }

    //upload Object
    const upload = {
      images: this.file,
      userId: this.user[0].userId,
      name: this.form.value.title,
      description: this.form.value.description,
      tags: this.tags,
      commentsId: '',
    };

    //POST
    // axios
    //   .post(
    //     `${env.baseUrl}${env.graph}`,
    //     upload
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //test graphql

    this.enableUploadButton = true;
    console.log({ upload });
  }

  public addTag() {
    this.tags.push(this.form.value.tag);
    this.form.get('tag').setValue('');
    this.color = this.randomColor[Math.floor(Math.random() * 3)];
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please check',
      message: 'Plase check inputs',
      buttons: ['OK'],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
