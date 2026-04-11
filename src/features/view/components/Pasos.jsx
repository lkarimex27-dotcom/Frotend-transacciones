import React from 'react';
import { Box, Typography, Container, Stack, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export const Pasos = () => {
  const pasosCircular = [
    {
      icon: <TouchAppIcon sx={{ fontSize: 40 }} />,
      title: 'Captura',
      desc: 'Tocas un botón, anotas el gasto.',
      color: '#1a73e8',
      position: 'top'
    },
    {
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
      title: 'Organiza',
      desc: 'Moni lo clasifica por ti.',
      color: '#2ecc71',
      position: 'center'
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
      title: 'Crece',
      desc: 'Ves tus ahorros subir.',
      color: '#f4b400',
      position: 'bottom'
    }
  ];

  return (
    <Box id="pasos" sx={{ py: 15, bgcolor: '#fdfdfd', overflow: 'hidden' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" sx={{ fontWeight: 900, color: '#1a73e8', letterSpacing: 3 }}>
            EL CICLO DEL ÉXITO
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>
            ¿Cómo funciona la <span style={{ color: '#1a73e8' }}>magia</span>?
          </Typography>
        </Box>

        {/* CONTENEDOR DEL DIAGRAMA */}
        <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
          
          {/* LÍNEA CONECTORA (Solo visible en Desktop) */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '50%',
              left: '5%',
              right: '5%',
              height: '4px',
              bgcolor: '#e0e0e0',
              zIndex: 0,
              borderRadius: '2px',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '30%',
                height: '100%',
                bgcolor: '#1a73e8',
                borderRadius: '2px',
                animation: 'moveLine 3s infinite linear'
              }
            }} 
          />

          <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
            {pasosCircular.map((paso, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Stack alignItems="center" spacing={3}>
                  
                  {/* CÍRCULO CON ICONO */}
                  <Paper
                    elevation={10}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#fff',
                      color: paso.color,
                      border: `4px solid ${paso.color}`,
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: `0 0 20px ${paso.color}60`
                      }
                    }}
                  >
                    {paso.icon}
                  </Paper>

                  {/* TEXTO INFORMATIVO */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                      {paso.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', maxWidth: '200px' }}>
                      {paso.desc}
                    </Typography>
                  </Box>

                  {/* FLECHA CONECTORA EN MÓVIL */}
                  {index < 2 && (
                    <DoubleArrowIcon 
                      sx={{ 
                        display: { xs: 'block', md: 'none' }, 
                        transform: 'rotate(90deg)', 
                        color: '#ddd' 
                      }} 
                    />
                  )}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ESTILOS DE ANIMACIÓN */}
        <style>
          {`
            @keyframes moveLine {
              0% { left: -30%; }
              100% { left: 100%; }
            }
          `}
        </style>
      </Container>
    </Box>
  );
};