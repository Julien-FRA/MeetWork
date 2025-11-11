import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Bienvenue sur Tinder Pro
      </Typography>
      <Typography variant="h5" align="center" sx={{ maxWidth: 600 }}>
        Découvrez une nouvelle façon de matcher, réseauter et collaborer avec
        des professionnels du monde entier. Créez votre profil, explorez des
        talents, et trouvez des opportunités qui vous correspondent.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.extraColors.darkGreen.main,
            color: theme.palette.extraColors.white.main,
          }}
          component={Link}
          to="/login"
        >
          Se connecter
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: theme.palette.extraColors.darkGreen.main,
            color: theme.palette.extraColors.darkGreen.main,
          }}
          component={Link}
          to="/register"
        >
          Créer un compte
        </Button>
      </Stack>
    </Box>
  );
}
