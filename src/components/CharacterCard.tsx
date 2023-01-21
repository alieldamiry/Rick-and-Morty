import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const CharacterCard = ({ cardData }: any) => {
  return (
    <Grid item xs={12} md={6} lg={3} >
      <Card variant="outlined">
        <CardContent>
          <Box component="img" src={cardData.image} sx={{ width: "100%" }} />
          <Typography color="primary.main" gutterBottom>
            {cardData.name}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cardData.status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
