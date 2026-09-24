import { Box, Container } from "@mui/material";

const PageContainer = ({ children, maxWidth = "xl", sx = {}, disableGutters = false }) => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 }, ...sx }}>
      <Container maxWidth={maxWidth} disableGutters={disableGutters}>
        {children}
      </Container>
    </Box>
  );
};

export default PageContainer;
