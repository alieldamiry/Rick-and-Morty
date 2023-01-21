import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`;
export const GET_CHARACTER_BY_ID = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      image
      type
      gender
      species
      origin {
        id
        name
      }
      location {
        id
        name
      }
    }
  }
`;
