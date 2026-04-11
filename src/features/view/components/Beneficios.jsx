import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Grid from '@mui/material/Grid'; 

// ICONOS CORREGIDOS (Todos estándar de MUI)
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GroupsIcon from '@mui/icons-material/Groups'; // Sustituto de DiversityChildCare
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Beneficios = () => {
  const beneficiosCreativos = [
    { 
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />, 
      title: 'Claridad Mental', 
      desc: 'Libera tu mente del "cuánto gasté". Mira tu panorama financiero en un vistazo y duerme tranquilo.',
      color: '#64b5f6' 
    },
    { 
      icon: <SpeedIcon sx={{ fontSize: 40 }} />, 
      title: 'Registros en 3 Segundos', 
      desc: 'Diseñada para la vida real. Saca el móvil, anota y sigue con tu día sin fricciones.',
      color: '#81c784' 
    },
    { 
      icon: <TipsAndUpdatesIcon sx={{ fontSize: 40 }} />, 
      title: 'Tu Coach Financiero', 
      desc: 'No solo guardamos datos; te enseñamos patrones y hábitos para que tu dinero rinda más.',
      color: '#ffb74d' 
    },
    { 
      icon: <SecurityIcon sx={{ fontSize: 40 }} />, 
      title: 'Fortaleza Digital', 
      desc: 'Tus finanzas son privadas. Usamos cifrado de nivel bancario para que solo tú tengas la llave.',
      color: '#9575cd' 
    },
    { 
      icon: <GroupsIcon sx={{ fontSize: 40 }} />, // Usando el nuevo icono aquí
      title: 'Metas en Común', 
      desc: '¿Ahorrando para un viaje o una casa? Crea metas visuales que te motiven a llegar más rápido.',
      color: '#4db6ac' 
    },
    { 
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />, 
      title: 'Libertad de Elegir', 
      desc: 'Cuando sabes dónde está tu dinero, tienes el poder de decidir en qué invertir tu futuro.',
      color: '#f06292' 
    },
  ];

  return (
    <Box id="beneficios" sx={{ bgcolor: '#ffffff', py: { xs: 10, md: 15 } }}>
      <Container>
        {/* Títulos */}
        <Box sx={{ maxWidth: '800px', mb: 10 }}>
          <Typography 
            variant="overline" 
            sx={{ color: '#1a73e8', fontWeight: 900, letterSpacing: 2, fontSize: '1rem' }}
          >
            MÁS QUE UNA APP DE GASTOS
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ fontWeight: 800, color: '#1a1a1a', mt: 2, mb: 3, lineHeight: 1.1 }}
          >
            Diseñada para tu <span style={{ color: '#1a73e8' }}>bienestar</span> financiero
          </Typography>
          <Typography variant="h6" component="p" sx={{color: '#5f6368', fontWeight: 400,     maxWidth: '600px', lineHeight: 1.6, mx: 'auto', textAlign: 'center'  }}>
            No se trata de números en una pantalla, se trata de la tranquilidad de saber 
            exactamente dónde estás y a dónde quieres llegar.
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
          {beneficiosCreativos.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 5, 
                  height: '100%', 
                  borderRadius: '32px',
                  bgcolor: '#f8fafd',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: '1px solid transparent',
                  '&:hover': { 
                    transform: 'translateY(-12px)',
                    bgcolor: '#ffffff',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                    borderColor: item.color
                  }
                }}
              >
                <Box 
                  sx={{ 
                    color: item.color, 
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px',
                    borderRadius: '20px',
                    bgcolor: `${item.color}15`, 
                  }}
                >
                  {item.icon}
                </Box>
                
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#1a1a1a' }}>
                  {item.title}
                </Typography>
                
                <Typography variant="body1" sx={{ color: '#5f6368', lineHeight: 1.7, fontSize: '1.05rem' }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};