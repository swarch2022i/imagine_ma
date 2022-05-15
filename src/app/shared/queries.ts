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
};
