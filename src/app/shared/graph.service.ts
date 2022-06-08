import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor() {}

  /**
   * queryImageId
   */
  public queryImageId(imageID) {
    const query = `
    query(${imageID}: String!){
    votesByImageId(imageID: ${imageID}) {
      votes{
        imageID
        votes
      }
    }
  }`;
    return query;
  }

  public queryComment(imageID) {
    const query = `
   query(${imageID}: String!){
      commentsByImageId(imageID: ${imageID}) {
        comments{
          imageID
          message
        }
      }
    }
  `;
    return query;
  }

  /**
   * imageByTag
   */
  public imageByTag(tag) {
    const query = `
    query{
      imageByTag(tag : "${tag}"){
        name
        description
        commentsId
        url
      }
    }

    `;
    return query;
  }

  /**
   * imageByName
   */
  public imageByName(name) {
    const query = `
    query{
      imageByName(name:"${name}"){
        name
        description
        commentsId
        url
      }
    }
    `;
    return query;
  }

  public allImagesStorage() {
    const query = `query{
      allImageStorage{
        url
      }
    }
    `;
    return query;
  }

  public getPerfilByIdUsuario(idUsuario) {
    const query = `query{
      getPerfilByIdUsuario(idUsuario:"${idUsuario}"){
        id
        idUsuario
        idImagenPerfil
        texto
        numfollowBy
        numfollowers
        nombre
      }
    }
    `;
    return query;
  }

  public allImages() {
    const query = `query{
      allImages{
        id
        url
        name
        description
        tag
        ownerId
        commentsId
      }
    }`;
    return query;
  }

  public signup(username, password) {
    const mutation = `mutation{
      createUserAUTH(user:{
        username: ${username},
        password: ${password}
      }){
        id,
        username
      }
    }`;
    return mutation;
  }

  public profileById(id) {
    const mutation = `query{
      PerfilById(id:${id}){
        nombre
        id
        idImagenPerfil
        numfollowBy
        numfollowers
        texto
        idUsuario
      }
    }`;
    return mutation;
  }

  /**
   * mutationSingup
   */
  public mutationSingUp(idUsuario, nombre) {
    const mutation = `
    mutation {
      createPerfil(perfil: {idUsuario: "${idUsuario}", idImagenPerfil: "defaul", nombre: "${nombre}"}) {
        id
        idUsuario
        idImagenPerfil
      }
    }
  `;
    return mutation;
  }
}
