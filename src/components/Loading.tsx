import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
