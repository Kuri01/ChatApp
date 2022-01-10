import { gql } from '@apollo/client';

export const LOAD_ROOMS = gql`
  query {
    usersRooms {
      rooms {
        id
        name
      }
    }
    user {
      id
    }
  }
`;

// export const LOAD_USER = gql`
//   query {

//   }
// `;

export const LOAD_MESSAGES = gql`
  query ($id: ID!) {
    room(id: $id) {
      messages {
        body
        id
        insertedAt
        user {
          firstName
          lastName
          id
        }
      }
    }
  }
`;
