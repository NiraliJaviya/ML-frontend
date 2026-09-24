import { Box, Typography } from "@mui/material";

const SectionHeader = ({ eyebrow, title, subtitle, align = "left", maxWidth = 640 }) => {
  return (
    <Box
      sx={{
        mb: { xs: 4, md: 6 },
        textAlign: align,
        mx: align === "center" ? "auto" : 0,
        maxWidth: align === "center" ? maxWidth : "none",
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: "secondary.main", display: "block", mb: 1 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: subtitle ? 1.5 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.05rem" }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
