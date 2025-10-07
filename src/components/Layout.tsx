import { Box, Container } from "@mui/material";
import { Footer } from "./Footer";
import { colors } from "../theme";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightBlue,
        px: { xs: 2, md: 14 },
        py: { xs: 2.5, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: colors.white,
          borderRadius: "20px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: { xs: "auto", md: "600px" },
          pt: "64px",
          px: "20px",
          pb: "20px",
          gap: "40px",
        }}
      >
        {children}

        <Footer />
      </Container>
    </Box>
  );
}
