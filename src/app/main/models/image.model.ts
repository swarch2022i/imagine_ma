import * as image from './../interfaces/image.interface';

export const IMAGE_MODEL: image.Image[] = [
  {
    uuid: 'asdasd',
    name: 'test',
    description: 'string',
    commentsId: 'string',
    url: '../../../assets/image_test/test.jpg',
  },
  {
    uuid: 'asdasd',
    name: 'test2',
    description: 'string',
    commentsId: 'string',
    url: '../../../assets/image_test/test.jpg',
  },
  {
    uuid: 'asdasd',
    name: 'test33',
    description: 'string',
    commentsId: 'string',
    url: '../../../assets/image_test/test.jpg',
  },
];

export const PROFILE_MODEL: image.Profile[] = [
  {
    name: 'Julius84',
    followers: 8000,
    following: 1,
    text: 'no se que poner aqui, subo imagenes aestethics!',
    urlProfileImage: '../../../assets/image_test/test.jpg',
  },
  {
    name: 'test2',
    followers: 5645,
    following: 54984,
    text: 'lorem impsum dorlor jasdjasjdjsad laksdhkasdjfhj ahgdk',
    urlProfileImage: '../../../assets/image_test/test.jpg',
  },
  {
    name: 'test33',
    followers: 0,
    following: 0,
    text: 'lorem impsum dorlor jasdjasjdjsad laksdhkasdjfhj ahgdk',
    urlProfileImage: '../../../assets/image_test/test.jpg',
  },
];

export const COLLECTION_MODEL: image.Collection[] = [
  {
    uuid: "asdasd",
    title: 'test',
    description: 'me describo',
    imagesId: ['1', '2', '3'],
  },
  {
    uuid: 'asdasd',
    title: 'test',
    description: 'me describo',
    imagesId: ['1', '2', '3'],
  },
];
