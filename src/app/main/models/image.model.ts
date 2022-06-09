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
  {
    uuid: 'asdasd',
    name: 'test33',
    description: 'string',
    commentsId: 'string',
    url: '../../../assets/image_test/1.jfif',
  },
  {
    uuid: 'asdasd',
    name: 'test33',
    description: 'string',
    commentsId: 'string',
    url: '../../../assets/image_test/2.jfif',
  },
  {
    uuid: 'asdasd',
    name: 'test33',
    description: 'string',
    commentsId: 'string',
    url: '../../../assets/image_test/3.jpg',
  },
];

export const PROFILE_MODEL: image.Profile[] = [
  {
    id: 7,
    idImagenPerfil: 'defaul',
    idUsuario: 'johantesteo',
    nombre: 'johantesteo',
    numfollowBy: 0,
    numfollowers: 0,
    texto: null,
  },
];

export const COLLECTION_MODEL: image.Collection[] = [
  {
    uuid: 'asdasd',
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
