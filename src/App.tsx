import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query {
    characters(page: 1) {
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
function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
console.log("data", data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.characters?.results?.map(({ id, name, status, image }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${image}`} />
      <br />
      <b>About this location:</b>
      <p>{status}</p>
      <br />
    </div>
  ));
}

export default App;
