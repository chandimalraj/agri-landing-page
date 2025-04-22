import React from "react";
import styles from "./FooterSection.module.css";
import { Box, Button, Grid, Typography, TextField, Link } from "@mui/material";

export default function FooterSection() {
  return (
    <Box className={styles.sectionContainer}>
      <Grid
        container
        sx={{
          width: {
            lg: "1200px",
            xl: "1500px",
          },
        }}
      >
        <Grid size={8} xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ color: "#72FF72", fontWeight: "bold" }}
          >
            Logo
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {[
              "About Us",
              "Contact Us",
              "Our Services",
              "Blog Posts",
              "FAQs",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                color="white"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Right section */}
        <Grid size={4} xs={12} md={6}>
          <Typography variant="body1" sx={{ mb: 1, color: "#72FF72" }}>
            Join
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              alignItems: "center",
              mb: 1,
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Your Email Here"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: "#72FF72",
                borderColor: "#72FF72",
                whiteSpace: "nowrap",
              }}
            >
              Join
            </Button>
          </Box>
          <Typography variant="caption" sx={{ color: "white" }}>
            By joining you accept our Terms and Privacy Policy.
          </Typography>
        </Grid>
        <Grid size={12}>
        <Box sx={{ mt: "80px", borderTop: "1px solid #ffffff30" }} />
        </Grid>
      </Grid>

      
    </Box>
  );
}
