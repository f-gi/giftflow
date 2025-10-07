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
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: colors.lightBlue,
        px: { xs: 2, md: 14 },
        py: { xs: 2.5, md: 10 },
      }}
    >
      <Container
        disableGutters
        maxWidth="md"
        sx={{
          backgroundColor: colors.white,
          borderRadius: "20px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: { xs: "auto", md: "600px" },
          p: { xs: 2, md: 4 },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>

        <Footer />
      </Container>
    </Box>
  );
}
