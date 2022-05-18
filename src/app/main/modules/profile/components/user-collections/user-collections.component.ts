import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/main/interfaces/image.interface';
import { COLLECTION_MODEL, } from "../../../../models/image.model";

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.scss'],
})
export class UserCollectionsComponent implements OnInit {

  public collections: Collection[] = COLLECTION_MODEL;

  constructor() { }

  ngOnInit() { }

}
