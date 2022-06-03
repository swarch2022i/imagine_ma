export interface Image {
  uuid: string;
  name: string;
  description: string;
  commentsId: string;
  url: string;
}

export interface Collection {
  uuid: string;
  title: string;
  description: string;
  imagesId: string[];
}

export interface Profile {
  id: number;
  idImagenPerfil: string;
  idUsuario: string;
  nombre: string;
  numfollowBy: number;
  numfollowers: number;
  texto: string;
}
