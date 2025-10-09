import { useEffect, useState } from "react";
import { Box, Typography, Button, Skeleton, useTheme } from "@mui/material";
import { Layout } from "../components/Layout";
import { getCustomerProducts } from "../services/products";
import { getRedeemPages } from "../services/redeem";
import { GiftCard } from "../components/GiftCard";
import { useNavigate } from "react-router-dom";

export function ChooseGift() {
  const [gifts, setGifts] = useState<any[]>([]);
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  // buscar a primeira campanha ativa
  const fetchActiveCampaign = async () => {
    const { redeem_pages } = await getRedeemPages();
    const activePage = redeem_pages.find((p: any) => p.status === "ACTIVE");
    if (!activePage) throw new Error("Nenhuma campanha ativa encontrada");
    return activePage;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activePage, products] = await Promise.all([
          fetchActiveCampaign(),
          getCustomerProducts(),
        ]);
        // lista de IDs de gifs permitidos nessa campanha
        const allowedIds = activePage.items.map(
          (item: any) => item.customer_product_id
        );

        const validProducts = products
        // só gifts que estão na campanha
          .filter((p: any) => allowedIds.includes(p.id))
          // anexa os dados da campanha a cada gift
          .map((p: any) => ({
            ...p,
            redeemPage: activePage,
          }));

        setGifts(validProducts);
      } catch (err) {
        console.error("Erro ao buscar gifts:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (id: string) => setSelectedGiftId(id);

  const handleContinue = () => {
    const selectedGift = gifts.find((g) => g.id === selectedGiftId);
    if (!selectedGift) return;

    const { redeemPage, ...giftWithoutPage } = selectedGift;

    navigate("/user-info", {
      state: {
        gift: giftWithoutPage,
        redeemPage: {
          id: redeemPage.id,
          title: redeemPage.title,
          extra_questions: redeemPage.extra_questions,
          button_color: redeemPage.button_color,
          background_color: redeemPage.background_color,
        },
      },
    });
  };

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
          {loading ? (
            skeletons.map((_, index) => (
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
          ) : error ? (
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ my: 6 }}
            >
              Ocorreu um erro ao carregar os presentes.
            </Typography>
          ) : gifts.length === 0 ? (
            <Typography color="text.secondary" sx={{ my: 6 }}>
              Nenhum presente disponível no momento.
            </Typography>
          ) : (
            gifts.map((gift) => (
              <GiftCard
                key={gift.id}
                id={gift.id}
                name={gift.full_name}
                imageUrl={gift.image_url}
                selected={gift.id === selectedGiftId}
                onSelect={() => handleSelect(gift.id)}
              />
            ))
          )}
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
            sx={{ borderRadius: "61px" }}
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
