import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment as env } from './../../../../environments/environment';
import { USER } from '../../models/user.model';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  randomColor = ['success', 'warning', 'danger'];
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
  public url = '';
  public color = 'success';
  public loadImage = false;
  public tags: string[] = [];
  public showButton = true;
  private user = USER;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  public uploadImageFromGallery(e): void {
    this.file = e.target.files[0];
    this.url = URL.createObjectURL(e.target.files[0]);
    this.showButton = false;
  }

  public publish() {
    //validation
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.presentAlert('please check inputs');
      return;
    }
    if (this.url === '') {
      this.presentAlert('please select an Image');
      return;
    }

    //upload Object
    const upload = {
      images: this.file,
      userId: this.user[0].userId,
      name: this.form.value.title,
      description: this.form.value.description,
      commentsId: '',
    };

    const formData = this.getFormData(upload);
    for (const i of this.tags) {
      formData.append('tags[]', i);
    }

    this.presentLoading();
    axios
      .post(`${env.baseUrl}${env.portStorage}/${env.endpointStorage}`, formData)
      .then((response) => {
        this.router.navigate(['/home']);
        this.form.reset();
        this.tags = [];
        this.url = '';
        this.loadImage = false;
        this.showButton = true;
        console.log(response);
      })
      .catch((error) => {
        this.presentAlert(error.message);
        console.log(error);
      });

    this.enableUploadButton = true;
  }

  public addTag() {
    this.tags.push(this.form.value.tag);
    this.form.get('tag').setValue('');
    this.color = this.randomColor[Math.floor(Math.random() * 3)];
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert-wrapper',
      header: 'Invalid!',
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  private getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }
}
