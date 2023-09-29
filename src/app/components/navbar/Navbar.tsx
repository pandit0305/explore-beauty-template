"use client"; // This is a client component
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styles } from '../../styles/explore.styles';
import { ColorModeContext } from '@/app/page';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const pages = [
  {
    id: 'services',
    key:0,
    name: 'Services'
  },
  {
    id: 'pricing',
    key:1,
    name: 'Pricing'
  },
  {
    id: '/blog',
    key:2,
    name: 'Blog'
  }
]
const settings = ['Profile', 'Account', 'Logout'];

export default function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const colorMode = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page:{id:string, name:string, key:number}) => {
    setAnchorElNav(null);
    if(page.id==="/blog"){
      return navigate('/blog');
    }
  };

  const handleCloseUserMenu = (item: string) => {
    if (item === "Logout") {
      Auth.signOut();
    }
    setAnchorElUser(null);
  };
  const getUser = async () => {
    try {
      const user = await Auth.currentUserInfo();
      setUser(user?.username);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={styles.x}
            variant="h4"
            noWrap>X</Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.logo}
          >
            Explore
          </Typography>

          <Box sx={styles.titleButton}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <Link to={page.id}
                key={page.key+Math.random()}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                >
                  <MenuItem onClick={()=>handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page?.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={styles.mobileLogo}
          >
            Explore
          </Typography>
          <Box sx={styles.mobileMenu}>
            {pages.map((page) => (
              <Link to={page.id}
                key={page.key+Math.random()}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                <Button
                  onClick={()=>handleCloseNavMenu(page)}
                  sx={styles.mobileBtn}
                >
                  {page?.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={styles.iconBtn}>
                <Box sx={styles.profileImage}>
                  <Typography
                    sx={styles.x}
                    variant="h5"
                    noWrap>{user[0]?.toUpperCase()}
                    </Typography>
                </Box>
              </IconButton>
            </Tooltip>
            <Menu
              sx={styles.menuTop}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}