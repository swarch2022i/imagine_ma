import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {

  selected = false;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];

  public readonly collection = new FormGroup({
    title: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.minLength(0),
      Validators.maxLength(250),
    ]),
    images_ids: new FormControl([], [
      Validators.required,
      Validators.nullValidator,
    ]),
  });

  constructor() { }

  ngOnInit() { }

  test(event: any, index: any) {
    console.log(event, index);
    this.selected = !this.selected;
  }

  send() {
    console.log(this.collection.value);
  }

  loadData(event: any) {
    console.log(event);
  }

}
