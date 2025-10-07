import { Typography, Button, Box } from "@mui/material";
import logo from "../assets/logo.svg";
import { Layout } from "../components/Layout";

export function Home() {
  return (
    <Layout>
      <Box
        textAlign="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo da Giftflow"
          width={120}
          sx={{ mb: { xs: 1, md: 2 } }}
        />

        <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
          Bem-vindo!
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={{ xs: 3, md: 4 }}
          sx={{ lineHeight: 1.4 }}
        >
          Estamos muito felizes em ter você em nossa equipe!
          <br />
          Preencha as perguntinhas a seguir para escolher o seu presente! 🎁
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: { xs: 2, md: 3 },
            px: { xs: 4, md: 6 },
          }}
        >
          Começar!
        </Button>
      </Box>
    </Layout>
  );
}
