import { useEffect, useState } from "react";
import { Box, Typography, Button, Skeleton, useTheme } from "@mui/material";
import { Layout } from "../components/Layout";
import { getCustomerProducts } from "../services/products";
import { GiftCard } from "../components/GiftCard";
import { useNavigate } from "react-router-dom";

export function ChooseGift() {
  const [gifts, setGifts] = useState<any[]>([]);
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getCustomerProducts();
        setGifts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleSelect = (id: string) => setSelectedGiftId(id);
  const handleContinue = () =>
    selectedGiftId &&
    navigate("/user-info", { state: { giftId: selectedGiftId } });
  const handleBack = () => navigate("/");

  const skeletons = Array.from({ length: 6 });

  return (
    <Layout>
      <Box
        component="section"
        sx={{ width: "100%", textAlign: "center", mb: 4 }}
        aria-label="Escolha de presente"
      >
        <Typography variant="h5" fontWeight={600} mb={4}>
          Escolha o seu presente! 🎁
        </Typography>

        <Box
          component="ul"
          role="radiogroup"
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap="20px"
          justifyItems="center"
          sx={{ maxWidth: "920px", mx: "auto", mb: 4, px: { xs: 1, md: 0 } }}
        >
          {loading
            ? skeletons.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    maxWidth: "293px",
                    height: "335px",
                    borderRadius: "6px",
                    border: `0.5px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.paper,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={261}
                    sx={{
                      borderRadius: "4px",
                      background: `linear-gradient(90deg,
                        ${theme.palette.background.paper} 25%,
                        ${theme.palette.divider} 50%,
                        ${theme.palette.background.paper} 75%)`,
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s infinite",
                        "@keyframes shimmer": {
                          "0%": { backgroundPosition: "-200% 0" },
                          "100%": { backgroundPosition: "200% 0" },
                        },
                    }}
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    sx={{ mx: "auto", mt: 2 }}
                  />
                </Box>
              ))
            : gifts.map((gift) => (
                <GiftCard
                  key={gift.id}
                  id={gift.id}
                  name={gift.full_name}
                  imageUrl={gift.image_url}
                  selected={gift.id === selectedGiftId}
                  onSelect={() => handleSelect(gift.id)}
                />
              ))}
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ maxWidth: "920px", mx: "auto" }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleBack}
            sx={{
              borderRadius: "61px",
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              "&:hover": {
                borderColor: theme.palette.primary.dark,
                backgroundColor: "transparent",
              },
            }}
          >
            Voltar
          </Button>

          <Button
            variant="contained"
            color="primary"
            disabled={!selectedGiftId || loading}
            onClick={handleContinue}
          >
            Continuar
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
