import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories {
  repositories {
    edges {
      node {
        language
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        description
        fullName
        name
        ownerAvatarUrl
        ownerName
        id
      }
    }
  }
}
`;
