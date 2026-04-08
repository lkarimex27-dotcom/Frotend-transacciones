import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, Stack, 
  IconButton, Container, Drawer, List, ListItem, 
  ListItemButton, ListItemText 
} from '@mui/material';
import { Link } from 'react-router-dom'; // 1. IMPORTANTE: Importar Link
import SavingsIcon from '@mui/icons-material/Savings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 2. CORREGIDO: Las rutas ahora coinciden con tus Routes de App.jsx
  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Beneficios', path: '/beneficios' },
    { title: 'Cómo funciona', path: '/pasos' },
    { title: 'Precios', path: '/Precios' }, // Mantengo la 'P' mayúscula como en tu AppRoutes
    { title: 'APIs', path: '/api' } // Ajustar si tienes una ruta para esto
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          top: { xs: 0, md: 15 },
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(15px)',
          color: '#1d1d1f',
          width: { xs: '100%', md: '90%' },
          left: { xs: 0, md: '5%' },
          borderRadius: { xs: 0, md: '20px' },
          border: '1px solid rgba(255, 255, 255, 0.3)',
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
            
            {/* LOGO */}
            <Stack component={Link} to="/" direction="row" alignItems="center" spacing={1.5} sx={{ textDecoration: 'none' }}>
              <Box sx={{ backgroundColor: '#000', borderRadius: '10px', p: 0.7, display: 'flex', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <SavingsIcon sx={{ color: '#fff', fontSize: 22 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, color: '#1d1d1f', letterSpacing: '-1px', fontSize: '1.4rem' }}>
                ConfiAPP
              </Typography>
            </Stack>

            {/* NAV DESKTOP - CORREGIDO a Link */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.title} 
                  component={Link}
                  to={link.path}
                  sx={{ color: '#1d1d1f', fontWeight: 600, fontSize: '0.85rem', textTransform: 'none', borderRadius: '10px', px: 2 }}
                >
                  {link.title}
                </Button>
              ))}
            </Box>

            {/* ACCIONES Y HAMBURGUESA - CORREGIDO a Link */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Button 
                variant="contained" 
                disableElevation
                component={Link} // 3. CORREGIDO: Ahora usa Link
                to="/portal"   // 4. CORREGIDO: Apunta a tu ruta de registro
                sx={{ 
                  backgroundColor: '#000', color: '#fff', textTransform: 'none', fontWeight: 700, 
                  borderRadius: '14px', px: 3, display: { xs: 'none', sm: 'block' },
                  '&:hover': { backgroundColor: '#333' }
                }}
              >
                Comenzar gratis
              </Button>

              <IconButton 
                color="inherit"
                aria-label="abrir menú de navegación"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MENÚ MÓVIL (DRAWER) - CORREGIDO a Link */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: '280px', p: 2, borderRadius: '20px 0 0 20px' }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={handleDrawerToggle} aria-label="cerrar menú">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton 
                component={Link} // 5. CORREGIDO: Link para móvil
                to={link.path} 
                onClick={handleDrawerToggle}
                sx={{ borderRadius: '12px', mb: 1 }}
              >
                <ListItemText 
                  primary={link.title} 
                  primaryTypographyProps={{ fontWeight: 700, color: '#1d1d1f' }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 2 }}>
          <Button 
            variant="contained" 
            fullWidth 
            disableElevation
            component={Link}
            to="/portal"
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: '#000', borderRadius: '12px', py: 1.5, fontWeight: 700, textTransform: 'none' }}
          >
            Comenzar gratis
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

