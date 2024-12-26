import { Avatar, Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const FAQ = ({ question, answer }: any) => {
  return (
    <Box mb={4} p={2}>
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar sx={{ bgcolor: blue[500], mr: 2, width: 32, height: 32 }}>
          Q
        </Avatar>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
          {question}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: "black", mr: 2, width: 32, height: 32 }}>
          A
        </Avatar>
        <Typography
          variant="body1"
          color="textPrimary"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          {answer}
        </Typography>
      </Box>
    </Box>
  );
};

export default FAQ;
