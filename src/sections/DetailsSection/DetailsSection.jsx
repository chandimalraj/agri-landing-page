import React from "react";
import styles from "./DetailsSection.module.css";
import { Grid, Typography, Box, Button } from "@mui/material";
import image from "../../assets/images/detailsimage.png";
import Relume from "../../assets/icons/relume.png";

export default function DetailsSection() {
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
        <Grid size={6} className={styles.rightSection}>
          <img src={image} alt="Hero Image" className={styles.heroImage} />
        </Grid>
        <Grid size={6} className={styles.leftSection}>
          <Typography
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
          >
            What is SkyCrop?
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "white",
              marginY: "30px",
            }}
          >
            SkyCrop is a white-label digital farming platform powered by
            satellite data. It unlocks new levels of precision, productivity,
            and profitability for farmers worldwide via digital platforms they
            already use. By leveraging accurate data, algorithms, and AI models,
            SkyCrop assists data-driven decision-making in farming and enhances
            the value of digital farming tools.
          </Typography>
          <Grid container>
            <Grid size={6}>
              <Box sx={{ display: "flex" }}>
                <img src={Relume} />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  Our Mission
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "white",
                    marginLeft: "40px",
                  }}
                >
                  Our mission is to aid agribusinesses in achieving their
                  sustainability goals while reducing risks. We accomplish this
                  by fusing cutting-edge crop management software with
                  comprehensive farm management software, enabling real-time
                  monitoring, facilitating data-driven decisions, and ensuring
                  compliance with international agricultural standards.
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box sx={{ display: "flex" }}>
                <img src={Relume} />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  Our Vission
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "white",
                    marginLeft: "40px",
                  }}
                >
                  SkyCrop was established as a leader in agricultural technology
                  with the goal of connecting technology and farming. We aim to
                  empower the agricultural industry through innovative crop
                  management software, assisting businesses in achieving
                  sustainability, traceability, and compliance.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Button
              variant="outlined"
              sx={{
                mx: "10px",
                borderRadius: "0px",
                color: "rgba(121, 213, 83, 1)",
                border: "1px solid rgba(121, 213, 83, 1)",
                padding: "10px 20px",
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
              >
                Documentation
              </Typography>
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}
