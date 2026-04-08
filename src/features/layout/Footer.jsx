import React from 'react';
import { Box, Container, Stack, Typography, IconButton } from '@mui/material';
// Importa los iconos que estés usando
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => (
  <Box component="footer" sx={{ py: 8, bgcolor: '#fff', borderTop: '1px solid #eee' }}>
    <Container maxWidth="lg">
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        justifyContent="space-between" 
        alignItems="center" 
        spacing={4}
      >
        {/* LOGO */}
        <Typography 
  variant="h6" 
  component="div" // <--- Estilo visual de título, pero semántica neutra
  sx={{ fontWeight: 900, letterSpacing: '-1px' }}
>ConfiAPP</Typography>

        {/* ENLACES DE TEXTO (Legibles) */}
        <Stack direction="row" spacing={4}>
          {['Privacidad', 'Términos'].map((t) => (
            <Typography 
              key={t} 
              variant="body2" 
              sx={{ color: '#575757', cursor: 'pointer', '&:hover': { color: '#000' } }}
            >
              {t}
            </Typography>
          ))}
        </Stack>

        {/* REDES SOCIALES (Aquí estaba el error) */}
        <Stack direction="row" spacing={1}>
          <IconButton 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener" 
            aria-label="Visitar nuestro perfil de Twitter" // <--- ESTO ARREGLA EL ERROR
            size="small"
            sx={{ color: '#575757', '&:hover': { color: '#1da1f2' } }}
          >
            <TwitterIcon fontSize="small" />
          </IconButton>

          <IconButton 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener" 
            aria-label="Ver nuestro código en GitHub" // <--- NOMBRE DISCERNIBLE
            size="small"
            sx={{ color: '#575757', '&:hover': { color: '#000' } }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>

          <IconButton 
            href="mailto:hola@moni.com" 
            aria-label="Enviar un correo electrónico de contacto" // <--- NOMBRE DISCERNIBLE
            size="small"
            sx={{ color: '#575757', '&:hover': { color: '#1a73e8' } }}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* COPYRIGHT */}
        <Typography variant="caption" sx={{ color: '#666' }}>
          © 2026 Moni Inc. — Finanzas con propósito.
        </Typography>
      </Stack>
    </Container>
  </Box>
);

