import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function RegisterPage() {
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
        Créer un compte
      </Typography>
      <Stack spacing={2}>
        <TextField label="Nom" fullWidth required />
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Mot de passe" type="password" fullWidth required />
        <Button variant="contained" color="primary" fullWidth>
          S'inscrire
        </Button>
      </Stack>
    </Box>
  );
}
