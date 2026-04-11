import React from 'react';
import { Box, Typography, Container, Button, Stack, Divider } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// 1. DATA EXPORTABLE (Para usar en Footer, Modales, etc.)
export const planesData = [
  { 
    title: 'Personal', 
    price: '$0', 
    cta: 'Empezar gratis',
    highlight: false,
    features: [
      { text: 'Cuentas vinculadas', val: 'Hasta 2' },
      { text: 'Registros mensuales', val: '200' },
      { text: 'IA básica', val: true },
      { text: 'Soporte', val: 'Comunidad' },
      { text: 'Exportar datos', val: false },
    ]
  },
  { 
    title: 'Pro', 
    price: '$9', 
    cta: 'Prueba Pro gratis',
    highlight: true,
    features: [
      { text: 'Cuentas vinculadas', val: 'Ilimitadas' },
      { text: 'Registros mensuales', val: 'Ilimitados' },
      { text: 'IA Predictiva', val: true },
      { text: 'Soporte', val: 'Prioritario 24/7' },
      { text: 'Exportar datos', val: 'PDF, CSV, Excel' },
    ]
  }
];

// 2. COMPONENTE EXPORTADO COMO "Precios"
export const Precios = () => {
  return (
    <Box sx={{ bgcolor: '#fff', py: 15 }} id="precios" component="section">
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" sx={{ mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-2px' }}>
            Precios honestos.
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: '#666' }}>
            Sin comisiones ocultas. Cancela cuando quieras.
          </Typography>
        </Stack>

        <Grid container sx={{ 
          border: '1px solid #eee', 
          borderRadius: '32px', 
          overflow: 'hidden', 
          bgcolor: '#fcfcfc',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
        }}>
          {planesData.map((plan, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={plan.title} sx={{ 
              p: { xs: 4, md: 8 }, 
              bgcolor: plan.highlight ? '#fff' : 'transparent',
              // Bordes inteligentes: cambian según si es móvil o PC
              borderLeft: { xs: 'none', md: i === 1 ? '1px solid #eee' : 'none' },
              borderTop: { xs: i === 1 ? '1px solid #eee' : 'none', md: 'none' },
              position: 'relative'
            }}>
              {plan.highlight && (
                <Box sx={{ 
                  position: 'absolute', top: 20, right: 20, 
                  bgcolor: '#e8f0fe', color: '#1a73e8', 
                  px: 2, py: 0.5, borderRadius: '20px', 
                  fontSize: '0.75rem', fontWeight: 800 
                }}>
                  RECOMENDADO
                </Box>
              )}
              
              <Typography variant="h5" component="h3" fontWeight={800} sx={{ mb: 1 }}>
                {plan.title}
              </Typography>
              
              <Typography variant="h2" component="p" fontWeight={900} sx={{ mb: 4 }}>
                {plan.price}
                <Box component="span" sx={{ fontSize: '1.2rem', color: '#999', ml: 1, fontWeight: 600 }}>/mes</Box>
              </Typography>

              <Button 
                variant={plan.highlight ? "contained" : "outlined"} 
                fullWidth 
                aria-label={`Seleccionar plan ${plan.title}`}
                sx={{ 
                  py: 2, borderRadius: '16px', fontWeight: 800, textTransform: 'none', fontSize: '1rem',
                  bgcolor: plan.highlight ? '#000' : 'transparent',
                  color: plan.highlight ? '#fff' : '#000',
                  borderColor: '#000',
                  mb: 6,
                  '&:hover': { 
                    bgcolor: plan.highlight ? '#333' : '#f5f5f5', 
                    borderColor: '#000',
                    boxShadow: 'none'
                  },
                  boxShadow: 'none'
                }}
              >
                {plan.cta}
              </Button>

              <Stack spacing={3}>
                {plan.features.map((f, idx) => (
                  <Box key={idx}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
                        {f.text}
                      </Typography>
                      {typeof f.val === 'boolean' ? (
                        f.val ? <CheckCircleIcon sx={{ color: '#2ecc71', fontSize: 20 }} /> : <Typography sx={{ color: '#ddd' }}>—</Typography>
                      ) : (
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {f.val}
                        </Typography>
                      )}
                    </Stack>
                    <Divider sx={{ mt: 2, opacity: 0.5 }} />
                  </Box>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};