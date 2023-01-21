import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterCard from "./CharacterCard";

test("Should display the card without crash", () => {
  render(
    <BrowserRouter>
      <CharacterCard
        cardData={{
          id: "1",
          name: "Rick Sanchez",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          status: "Alive",
        }}
      />
    </BrowserRouter>
  );

  expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  expect(screen.getByText("Alive")).toBeInTheDocument();
  expect(screen.getByAltText("Rick Sanchez image")).toBeInTheDocument();
});
