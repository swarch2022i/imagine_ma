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
  allImageStorage: `query{
  allImageStorage{
    url
  }
}
`,
  allImages: `query{
  allImages{
    id
    name
    description
    tags
    ownerId
    commentsId
    imageStorageId
    url
  }
}`,

  signup: `mutation{
    createUserAUTH(user:{
      username: $username,
      password: $password
    }){
      id,
      username
    }
  }`
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
