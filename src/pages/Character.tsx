import { useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GET_CHARACTER_BY_ID } from "../graphql/queries";
import { statusColors } from "../utils/maps";
import Loading from "../components/Loading";
import { FC } from "react";

const Character: FC = () => {
  const { characterId } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: characterId },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ textAlign: "center" }}>
        <Box component="img" src={data?.character?.image} />
        <Typography sx={{ fontWeight: "bold" }}>
          Name:{" "}
          <Typography component="span">{data?.character?.name}</Typography>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Status:{" "}
          <Typography
            component="span"
            color={statusColors[data?.character?.status]}
          >
            {data?.character?.status}
          </Typography>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Gender:{" "}
          <Typography component="span">{data?.character?.gender}</Typography>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Species:{" "}
          <Typography component="span">{data?.character?.species}</Typography>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Origin:{" "}
          <Typography component="span">
            {data?.character?.origin.name}
          </Typography>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Location:{" "}
          <Typography component="span">
            {data?.character?.location.name}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Character;
