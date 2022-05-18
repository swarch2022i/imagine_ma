import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {

  selected = false;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];


  constructor(
    private render: Renderer2,
  ) { }

  ngOnInit() { }

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

  test(event: any, index: any) {
    const hasClass = event.target.classList.contains('show');
    if (hasClass) {
      this.render.removeClass(event.target, 'show');;
    } else {
      this.render.addClass(event.target, 'show');
    }
  }

  send() {
    console.log(this.collection.value);
  }

  loadData(event: any) {
    console.log(event);
  }

}
