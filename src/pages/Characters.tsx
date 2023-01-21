import { FC, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CharacterCard from "../components/CharacterCard";
import Container from "@mui/system/Container";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import Loading from "../components/Loading";
import { characterType } from "../types";

const Characters: FC = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {data.characters?.results?.map((character: characterType) => (
          <CharacterCard key={character.id} cardData={character} />
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={data?.characters?.info?.pages}
          onChange={handlePageChange}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  );
};

export default Characters;
