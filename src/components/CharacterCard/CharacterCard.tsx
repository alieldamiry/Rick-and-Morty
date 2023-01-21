import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { statusColors } from "../../utils/maps";
import { characterType } from "../../types";
import { FC } from "react";

type CharacterCardProps = {
  cardData: characterType;
};

const CharacterCard: FC<CharacterCardProps> = ({ cardData }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card variant="outlined">
        <CardContent>
          <Box
            component="img"
            src={cardData.image}
            sx={{ width: "100%" }}
            alt={`${cardData.name} image`}
          />
          <Typography color="primary.main" sx={{ fontWeight: "bold" }}>
            {cardData.name}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            color={statusColors[cardData?.status]}
          >
            {cardData.status}
          </Typography>
        </CardContent>
        <CardActions>
          <Link component={NavLink} to={cardData.id}>
            Learn More
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
