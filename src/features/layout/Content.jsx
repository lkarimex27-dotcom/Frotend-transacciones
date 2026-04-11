import React from 'react';
import { Box, Typography, Container, Button, Stack, Paper, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// Usamos Grid2 para evitar errores de reflow y mejorar el renderizado
import Grid from '@mui/material/Grid'; 

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import StarIcon from '@mui/icons-material/Star';

export const Content = () => {
  return (
    <Box component="main" sx={{ width: '100%', overflowX: 'hidden' }}>
      
      {/* --- SECCIÓN HERO --- */}
      <Box sx={{ 
        pt: { xs: 15, md: 22 }, 
        pb: 10, 
        background: 'radial-gradient(circle at 90% 10%, #e8f0fe 0%, #ffffff 40%)',
        minHeight: '80vh',
        contain: 'content' // Optimización para evitar forced reflow
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <Chip 
                  label="ConfiAPP v2.0 ya está aquí" 
                  variant="outlined"
                  sx={{ width: 'fit-content', fontWeight: 700, borderColor: '#eee', bgcolor: '#fff', px: 1 }} 
                />
                <Typography variant="h1" sx={{ 
                  fontWeight: 900, 
                  fontSize: { xs: '3rem', md: '5rem' }, 
                  letterSpacing: '-3px',
                  lineHeight: 1,
                  color: '#1d1d1f'
                }}>
                  Domina tu <br />
                  <span style={{ 
                    background: 'linear-gradient(90deg, #1a73e8, #2ecc71)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>dinero.</span>
                </Typography>
                
                <Typography 
                  variant="h6" 
                  component="p" 
                  sx={{ color: '#5f6368', fontWeight: 400, maxWidth: '500px', lineHeight: 1.5 }}
                >
                  La plataforma inteligente que organiza tus gastos antes de que termines de pagar. Sin hojas de cálculo, sin estrés.
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
                  <Button 
                    variant="contained" 
                    disableElevation
                    endIcon={<ArrowForwardIcon />}
                    sx={{ bgcolor: '#000', py: 2, px: 4, borderRadius: '16px', fontWeight: 700, textTransform: 'none', fontSize: '1.1rem', '&:hover': { bgcolor: '#333' } }}
                  >
                    Empezar ahora — Es gratis
                  </Button>
                  <Button sx={{ color: '#1d1d1f', fontWeight: 700, textTransform: 'none', px: 3 }}>
                    Ver cómo funciona
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Paper elevation={0} sx={{ 
                  p: 3, borderRadius: '24px', bgcolor: '#000', color: '#fff', mb: 2,
                  transform: { md: 'rotate(-2deg)' },
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)', position: 'relative', zIndex: 2,
                  willChange: 'transform'
                }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Balance Total</Typography>
                    <AccountBalanceWalletIcon sx={{ opacity: 0.8 }} />
                  </Stack>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 800, mt: 1 }}>$4,250.00</Typography>
                </Paper>

                <Paper elevation={0} sx={{ 
                  p: 3, borderRadius: '24px', bgcolor: '#fff', border: '1px solid #eee',
                  width: '85%', ml: '15%', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative', zIndex: 1
                }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ bgcolor: '#e8f0fe', p: 1, borderRadius: '10px', color: '#1a73e8', display: 'flex' }}>
                      <TrendingUpIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 600 }}>Ahorro este mes</Typography>
                      <Typography variant="subtitle1" component="span" sx={{ fontWeight: 800, display: 'block' }}>+12.5%</Typography>
                    </Box>
                  </Stack>
                </Paper>
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 250, height: 250, bgcolor: '#2ecc71', borderRadius: '50%', filter: 'blur(90px)', opacity: 0.15, zIndex: 0 }} />
              </Box>
            </Grid>
          </Grid>

          {/* LOGOS DE CONFIANZA */}
          <Box sx={{ mt: { xs: 10, md: 15 }, pt: 8, borderTop: '1px solid #f5f5f5', textAlign: 'center' }}>
            <Typography variant="body2" component="p" sx={{ color: '#bbb', fontWeight: 700, letterSpacing: 1.5, mb: 5 }}>
              RESPALDADO POR LOS MEJORES
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ opacity: 0.4 }}>
              {['FINTECH', 'STARTUP', 'GLOBAL', 'SECURE'].map((logo) => (
                <Grid key={logo} size={{ xs: 6, sm: 3 }}>
                  <Typography variant="h5" component="p" sx={{ fontWeight: 900, color: '#000', letterSpacing: 1 }}>
                    {logo}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Button
          variant="outlined"
          color="inherit"
          href="https://github.com/lkarimex27-dotcom/Frotend-transacciones.git"
          target="_blank"
          rel="noopener"
          sx={{
            borderRadius: '14px',
            textTransform: 'none',
            fontWeight: 800,
            px: 4,
            py: 1.5,
            borderColor: '#1a73e8',
            color: '#1a73e8',
            fontSize: { xs: '1rem', md: '1.15rem' },
            '&:hover': {
              bgcolor: '#e8f0fe',
              borderColor: '#1a73e8',
            },
            transition: 'all 0.2s',
          }}
          startIcon={
            // Simple SVG for GitHub logo (MUI lacks a built-in one)
            <svg height="22" width="22" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'block' }}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
              -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64
              -.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82A7.6 7.6 0 018
              4.77c.68.003 1.37.092 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82
              2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.002
              8.002 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          }
        >
          Ver en GitHub
        </Button>
      </Box>

      {/* --- SECCIÓN: BENEFICIOS --- */}
      <Container sx={{ py: 15, contentVisibility: 'auto', containIntrinsicSize: '0 500px' }} id="beneficios" component="section">
        <Stack spacing={2} textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="overline" component="span" sx={{ color: '#1a73e8', fontWeight: 900, letterSpacing: 2 }}>BENEFICIOS</Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 800 }}>Tu libertad financiera,<br/>más cerca que nunca.</Typography>
        </Stack>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper elevation={0} sx={{ p: 5, bgcolor: '#f8fafd', borderRadius: '32px', height: '100%', border: '1px solid #eee' }}>
              <BoltIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} aria-hidden="true" />
              <Typography variant="h5" component="h3" fontWeight={800} gutterBottom>Sincronización Instantánea</Typography>
              <Typography variant="body1" component="p" color="text.secondary" sx={{ maxWidth: '500px' }}>
                Conecta tus cuentas y mira cómo tus transacciones se categorizan solas en tiempo real.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={{ p: 5, bgcolor: '#000', color: '#fff', borderRadius: '32px', height: '100%' }}>
              <StarIcon sx={{ fontSize: 48, color: '#2ecc71', mb: 2 }} aria-hidden="true" />
              <Typography variant="h5" component="h3" fontWeight={800} gutterBottom>Seguridad Premium</Typography>
              <Typography variant="body1" component="p" sx={{ opacity: 0.7 }}>
                Tus datos están protegidos con cifrado bancario de última generación.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* --- SECCIÓN: PRECIOS --- */}
      <Box sx={{ bgcolor: '#f8fafd', py: 15, contentVisibility: 'auto', containIntrinsicSize: '0 600px' }} id="precios" component="section">
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 800, color: '#1d1d1f', textAlign: 'center', mb: 8 }}>
            Planes simples.
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Personal', price: '$0', feat: ['200 registros/mes', 'Reportes básicos', 'App Móvil'], highlight: false },
              { title: 'Pro', price: '$9', feat: ['Registros ilimitados', 'IA Financiera', 'Exportar PDF', 'Soporte 24/7'], highlight: true }
            ].map((plan, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <Paper 
                  elevation={plan.highlight ? 4 : 0}
                  sx={{ 
                    p: 5, borderRadius: '32px', textAlign: 'center', bgcolor: '#ffffff',
                    border: plan.highlight ? '2px solid #000' : '1px solid #e0e0e0',
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mb: 1 }}>
                    {plan.title}
                  </Typography>
                  
                  <Typography variant="h3" component="p" sx={{ fontWeight: 900, my: 2 }}>
                    {plan.price}
                    <Box component="span" sx={{ fontSize: '1.2rem', color: '#575757', fontWeight: 600, ml: 1 }}>
                      /mes
                    </Box>
                  </Typography>

                  <List sx={{ mb: 4, minHeight: '180px' }}>
                    {plan.feat.map(f => (
                      <ListItem key={f} disableGutters sx={{ justifyContent: 'center', py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}><CheckCircleIcon sx={{ color: '#2ecc71', fontSize: 20 }} /></ListItemIcon>
                        <ListItemText primary={f} primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: '#444' }} />
                      </ListItem>
                    ))}
                  </List>

                  <Button 
                    fullWidth 
                    variant="contained" 
                    aria-label={`Elegir plan ${plan.title}`}
                    sx={{ 
                      borderRadius: '14px', py: 1.8, fontWeight: 800, textTransform: 'none',
                      bgcolor: plan.highlight ? '#000' : '#f0f0f0', color: plan.highlight ? '#fff' : '#000',
                      boxShadow: 'none', '&:hover': { bgcolor: plan.highlight ? '#333' : '#e0e0e0', boxShadow: 'none' }
                    }}
                  >
                    Elegir Plan
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

