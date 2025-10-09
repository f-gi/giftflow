import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";

export function RedeemForm() {
  const { state } = useLocation();
  const gift = state?.gift;
  const redeemPage = state?.redeemPage;

  return (
    <Layout>
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center", mt: 4 }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Dados recebidos do gift selecionado
        </Typography>

        <pre
          style={{
            textAlign: "left",
            background: "#f4f4f4",
            padding: "16px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          {JSON.stringify({ gift, redeemPage }, null, 2)}
        </pre>
      </Box>
    </Layout>
  );
}
