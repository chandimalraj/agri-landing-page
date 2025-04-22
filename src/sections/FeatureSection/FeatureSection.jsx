import React from "react";
import styles from "./FeatureSection.module.css";
import { Grid, Typography } from "@mui/material";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import feature01 from "../../assets/images/feature01.png";
import data from "../../assets/images/data.png";
import report from "../../assets/images/reporting.png";
import dashboard from "../../assets/images/dashboard.png";
import stakeholder from "../../assets/images/stakeholder.png";
import risk from "../../assets/images/riskmanagement.png"


export default function FeatureSection() {
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
        <Grid size={12} className={styles.centerSection}>
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: "700",
              color: "white",
              marginBottom: "100px",
            }}
          >
            Key Features
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: {
            lg: "1200px",
            xl: "1500px",
          },
        }}
        className={styles.featureContainer}
      >
        <Grid size={4}>
          <FeatureCard
            title={"Real-time Crop Monitoring"}
            description={
              "satellite information deliver constant analysis of crop health."
            }
            imageSrc={feature01}
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            title={"Data-Powered Insights"}
            description={
              "Cutting-edge data analytics provide insights for yield predictions, pest risk management, and climate adaptation strategies."
            }
            imageSrc={data}
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            title={"Regulatory Compliance Reporting"}
            description={
              "Utilizing automated tools enhances the ease of reporting and ensures compliance with global regulatory requirements."
            }
            imageSrc={report}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: {
            lg: "1200px",
            xl: "1500px",
          },
        }}
        className={styles.featureContainer}
      >
        <Grid size={4}>
          <FeatureCard
            title={"Custom Dashboards"}
            description={
              "Easy-to-use dashboards for tracking inputs, sustainability factors, and operational effectiveness."
            }
            imageSrc={dashboard}
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            title={"Stakeholder Integration"}
            description={
              "A smart agri-tech system that links farmers, exporters, and agribusiness leaders for better transparency and accountability."
            }
            imageSrc={stakeholder}
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            title={"Advanced Risk Management"}
            description={
              "A collection of cutting-edge crop management systems, supported by field technicians and remote sensing, to identify and reduce risks, ensuring sustainable farming practices"
            }
            imageSrc={risk}
          />
        </Grid>
      </Grid>
    </div>
  );
}
