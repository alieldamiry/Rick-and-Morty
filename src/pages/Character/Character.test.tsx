import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GET_CHARACTER_BY_ID } from "../../graphql/queries";
import CharacterDetails from "./CharacterDetails";

describe("Displaying Characters", () => {
  test("testing loading and succeess states", async () => {
    const mocks = [
      {
        request: {
          query: GET_CHARACTER_BY_ID,
          variables: {
            id: "1",
          },
        },
        result: {
          data: {
            character: {
              id: 1,
              name: "Rick Sanchez",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              type: "",
              gender: "Male",
              species: "Human",
              origin: {
                id: "1",
                name: "Earth (C-137)",
              },
              location: {
                id: "3",
                name: "Citadel of Ricks",
              },
            },
          },
        },
      },
    ];
    render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <CharacterDetails characterId="1" />
        </MockedProvider>
      </BrowserRouter>
    );
    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
  });
});
