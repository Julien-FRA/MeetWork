import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Connexion
      </Typography>
      <Stack spacing={2}>
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Mot de passe" type="password" fullWidth required />
        <Button variant="contained" color="primary" fullWidth>
          Se connecter
        </Button>
      </Stack>
    </Box>
  );
}
