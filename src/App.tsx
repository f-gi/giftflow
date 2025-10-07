import { Container, Typography, Button, Box } from "@mui/material";
import logo from "./assets/logo.svg";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        mt: 10,
      }}
    >
      <Box component="header" mb={4}>
        <Box
          component="img"
          src={logo}
          alt="Giftflow logo"
          width={120}
          sx={{ mb: 2 }}
        />
      </Box>

      <Typography variant="h4" fontWeight={600} gutterBottom>
        Welcome!
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
        sx={{ lineHeight: 1.4 }}
      >
        We’re very happy to have you on our team!
        <br />
        Fill in the following steps to choose your gift! 🎁
      </Typography>

      <Button variant="contained" color="primary" size="large">
        Start
      </Button>

      <Typography
        variant="caption"
        display="block"
        mt={8}
        color="text.secondary"
      >
        © 2025 · <strong>Company X</strong> in partnership with Giftflow
      </Typography>
    </Container>
  );
}

export default App;
