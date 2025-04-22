import React from "react";
import styles from "./SignUpSection.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function SignUpSection() {
  return (
    <div className={styles.sectionContainer}>
      <Grid
        container
        sx={{
          width: {
            lg: "1200px",
            xl: "1500px",
          },
        }}
      >
        <Grid size={12} className={styles.leftSection}>
          <Typography
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
          >
            Get Started with Us Today
          </Typography>
        </Grid>
        <Grid size={12} className={styles.leftSection}>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "400", color: "white" }}
          >
            Unlock your potential—reach out now to discover how we can help you
            succeed.
          </Typography>
        </Grid>
        <Grid size={12} className={styles.leftSection}>
          <Box sx={{ display: "flex", marginY: "20px" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0px",
                backgroundColor: "rgba(121, 213, 83, 1)",
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Sign Up
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                mx: "10px",
                borderRadius: "0px",
                color: "rgba(121, 213, 83, 1)",
                border: "1px solid rgba(121, 213, 83, 1)",
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Learn More
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
