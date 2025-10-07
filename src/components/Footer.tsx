import { Typography, Box } from "@mui/material";

export function Footer() {
  return (
    <Box component="footer" mt={8} textAlign="center">
      <Typography variant="caption" color="text.secondary" component="p">
        © <time dateTime="2025">2025</time> · <strong>Empresa X</strong> em
        parceria com a Lobby
      </Typography>
    </Box>
  );
}
