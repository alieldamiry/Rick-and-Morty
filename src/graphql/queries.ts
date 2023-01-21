import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query($page: Int!) {
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
        type
      }
    }
  }
`;
