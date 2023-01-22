import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Characters from "./Characters";
import { GET_CHARACTERS } from "../../graphql/queries";
import { BrowserRouter } from "react-router-dom";

describe("Displaying Characters", () => {
  test("testing loading and succeess states", async () => {
    const mocks = [
      {
        request: {
          query: GET_CHARACTERS,
          variables: {
            page: 1,
          },
        },
        result: {
          data: {
            characters: {
              info: {
                count: 826,
                pages: 42,
                next: 2,
                prev: null,
              },
              results: [
                {
                  id: "1",
                  name: "Rick Sanchez",
                  status: "Alive",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                },
              ],
            },
          },
        },
      },
    ];
    render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Characters />
        </MockedProvider>
      </BrowserRouter>
    );
    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
  });

  test("testing error state", async () => {
    const mocks = [
      {
        request: {
          query: GET_CHARACTERS,
          variables: {
            page: 1,
          },
        },
        error: new Error("An error occurred"),
      },
    ];
    render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Characters />
        </MockedProvider>
      </BrowserRouter>
    );
    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByText("An error occurred")).toBeInTheDocument();
  });
});
