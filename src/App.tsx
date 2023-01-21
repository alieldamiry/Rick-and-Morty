import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql/queries";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/system/Container";
import CharacterCard from "./components/CharacterCard";
import { Pagination } from "@mui/material";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, data }: any = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (loading)
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {data.characters?.results?.map((character: any) => (
          <CharacterCard key={character.id} cardData={character} />
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={data?.characters?.info?.count}
          onChange={handlePageChange}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  );
}

export default App;
