import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";

interface GiftCardProps {
  id: string;
  name: string;
  imageUrl: string;
  selected: boolean;
  onSelect: () => void;
}

export function GiftCard({
  name,
  imageUrl,
  selected,
  onSelect,
}: GiftCardProps) {
  const theme = useTheme();

  return (
    <Card
      component="li"
      onClick={onSelect}
      aria-checked={selected}
      role="radio"
      sx={{
        listStyle: "none",
        position: "relative",
        width: "100%",
        maxWidth: "293px",
        height: "335px",
        border: `0.5px solid ${theme.palette.divider}`,
        borderRadius: "6px",
        padding: "16px",
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "border-color 0.2s ease",
        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      <Box sx={{ position: "absolute", top: 8, right: 8 }}>
        <Box
          component="input"
          type="radio"
          name="gift"
          checked={selected}
          onChange={onSelect}
          aria-label={`Selecionar ${name}`}
          sx={{
            appearance: "none",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: selected ? "none" : `1px solid ${theme.palette.divider}`,
            backgroundColor: selected
              ? theme.palette.secondary.main
              : theme.palette.background.default,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            outline: "none",
          }}
        />
        {selected && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: "10px",
              height: "18px",
              borderRight: `2px solid ${theme.palette.common.white}`,
              borderBottom: `2px solid ${theme.palette.common.white}`,
            }}
          />
        )}
      </Box>

      {imageUrl ? (
        <Box
          component="img"
          src={imageUrl}
          alt={`Imagem do presente ${name}`}
          sx={{
            width: "100%",
            height: 261,
            objectFit: "contain",
            mb: 2,
          }}
        />
      ) : (
        <Box
          role="img"
          aria-label={`Imagem do presente ${name} não disponível`}
          sx={{
            width: "100%",
            height: 261,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "4px",
            mb: 2,
          }}
        />
      )}

      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="body2"
          fontWeight={500}
          textAlign="center"
          color="text.primary"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
