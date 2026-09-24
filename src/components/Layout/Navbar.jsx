import { useState } from "react";
import { AppBar, Box, Button, Container, IconButton, Toolbar } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Common/Logo";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS } from "./navLinks";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 } }}>
            <Box component={Link} to="/" sx={{ display: "flex", textDecoration: "none", mr: 4 }}>
              <Logo />
            </Box>

            <Box
              component="nav"
              aria-label="Primary navigation"
              sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    aria-current={isActive ? "page" : undefined}
                    sx={{
                      color: isActive ? "primary.main" : "text.secondary",
                      fontWeight: isActive ? 700 : 600,
                      position: "relative",
                      "&:after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 4,
                            left: "22%",
                            width: "56%",
                            height: 2,
                            borderRadius: 1,
                            backgroundColor: "secondary.main",
                          }
                        : {},
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Button
              component={Link}
              to="/predict"
              variant="contained"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              Start Assessment
            </Button>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }}
              aria-label="Open navigation menu"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
