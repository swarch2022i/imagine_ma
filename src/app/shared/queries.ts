export const queries = {
  votesByImageId: `query($imageID: String!){
    votesByImageId(imageID: $imageID) {
      votes{
        imageID
        votes
      }
    }
  }
`,
  commentsByImageId: `query($imageID: String!){
    commentsByImageId(imageID: $imageID) {
      comments{
        imageID
        message
      }
    }
  }
`,
  imageByTag: `query($tag : String!){
  imageByTag(tag : $tag){
    name
    description
    commentsId
    url
  }
}`,
  imageByName: `query($name : String!){
  imageByName(name: $name){
    name
    description
    commentsId
    url
  }
}
`,
  allImageStorage: `query{
  allImageStorage{
    url
  }
}
`,
  allImages: `query{
  allImages{
    id
    url
    name
    description
    tag
    ownerId
    commentsId
  }
}`,
};

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
