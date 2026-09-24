import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Common/Logo";
import { NAV_LINKS } from "./navLinks";

const MobileDrawer = ({ open, onClose }) => {
  const location = useLocation();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{ sx: { width: 280 } }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 2 }}>
        <Logo size="small" />
        <IconButton onClick={onClose} aria-label="Close navigation menu">
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      <Divider />

      <List component="nav" aria-label="Mobile navigation" sx={{ px: 1, py: 1 }}>
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <ListItemButton
              key={link.path}
              component={Link}
              to={link.path}
              onClick={onClose}
              selected={isActive}
              aria-current={isActive ? "page" : undefined}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": {
                  backgroundColor: "rgba(65,90,119,0.10)",
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontWeight: isActive ? 700 : 500 }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ px: 2, mt: "auto", pb: 3 }}>
        <Button
          component={Link}
          to="/predict"
          onClick={onClose}
          variant="contained"
          fullWidth
        >
          Start Assessment
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
