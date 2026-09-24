import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../Common/Logo";
import { NAV_LINKS } from "./navLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main", color: "rgba(255,255,255,0.85)", mt: 8 }}>
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Logo light />
            <Typography variant="body2" sx={{ mt: 2, color: "rgba(255,255,255,0.65)", maxWidth: 320 }}>
              AI-Powered Loan Risk Assessment
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ color: "#FFFFFF", mb: 1.5 }}>
              Navigation
            </Typography>
            <Stack spacing={1}>
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    width: "fit-content",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ color: "#FFFFFF", mb: 1.5 }}>
              Technology
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
              React • FastAPI • Python • scikit-learn
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.12)" }} />

        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
          © {year} LoanGuard. Built as an academic machine learning demonstration project.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
