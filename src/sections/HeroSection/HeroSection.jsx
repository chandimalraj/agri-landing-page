import React from "react";
import styles from "./HeroSection.module.css";
import { Grid, Typography } from "@mui/material";
import image from "../../assets/images/image.png";

export default function HeroSection() {
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
        <Grid size={6} className={styles.leftSection}>
          <Typography
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
          >
            Leading Agriculture Technology with Smart Crop Management Software
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "white",
              marginTop: "30px",
            }}
          >
            Crop Analytica is making significant strides in India's Agritech
            industry by innovating farm management software with our data-driven
            crop monitoring solutions. Recognized as one of the leading
            Agriculture Technology Companies, we work alongside multiple
            stakeholders to improve productivity, ensure adherence to
            regulations, and foster sustainable practices. Our smart crop
            management software combines remote sensing, IoT technology,
            real-time analytics, and data-informed decision-making which makes
            us the frontrunner in precision agriculture solutions. Contemporary
            farming faces several challenges, including inefficiencies in
            compliance, resource shortages, and unpredictable weather patterns.
            Crop Analytica helps tackle these issues with its Crop Monitoring
            Software and Smart Agriculture System, providing complete operation
            visibility, data-driven solutions, and predictive analytics for
            various stakeholders.
          </Typography>
        </Grid>
        <Grid size={6} className={styles.rightSection}>
          <img src={image} alt="Hero Image" className={styles.heroImage} />
        </Grid>
      </Grid>
    </div>
  );
}
