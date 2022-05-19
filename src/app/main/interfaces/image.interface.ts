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
  name: string;
  followers: number;
  following: number;
  urlProfileImage: string;
  text: string;
}
