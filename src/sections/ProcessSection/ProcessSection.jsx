import React from "react";
import styles from "./ProcessSection.module.css";
import { Box, Grid, Typography } from "@mui/material";
import image from "../../assets/images/cropimage.png";

export default function ProcessSection() {
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
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
            variant="h1"
          >
            Complete Visibility into Every Crop, Every Stage
          </Typography>
        </Grid>
        <Grid size={12} sx={{ marginY: "40px" }}>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "white" }}
            variant="h1"
          >
            SkyCrop is a hite-label digital farming platform powered by
            satellite data. It unlocks new levels of precision, productivity,
            and profitability for farmers worldwide via digital platforms they
            already use. By leveraging accurate data, algorithms, and AI models,
            SkyCrop assists data-driven decision-making in farming and enhances
            the value of digital farming tools.
          </Typography>
        </Grid>
        <Grid
          size={12}
          sx={{
            padding: "20px",
            backgroundColor: "#d8d6d3",
            borderRadius: "20px",
            maxHeight: "500px", // You can adjust this height
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
            scrollbarWidth: "thin", // Firefox
            scrollbarColor: "#888 #f1f1f1", // Firefox
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              padding: "40px",
              paddingLeft: "100px",
              paddingTop: "100px",
              backgroundColor: "rgba(55, 120, 105, 1)",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            <Grid
              size={6}
              sx={{
                padding: "20px",
              }}
            >
              <img src={image} />
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px",
                }}
                variant="h1"
              >
                Comprehensive Crop Monitoring
              </Typography>
              <ul style={{ marginTop: "20px" }}>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Monitor each phase of planting, vegetative growth, flowering,
                  and harvesting using real-time tracking tools.
                </li>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Utilize IoT sensors and satellite imaging to assess the health
                  of your soil, the density of crops, and the overall
                  productivity of your farm.
                </li>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Recognize patterns in crop performance and foresee risks that
                  could potentially affect your yields.
                </li>
              </ul>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              padding: "40px",
              paddingLeft: "100px",
              paddingTop: "100px",
              backgroundColor: "rgba(55, 120, 105, 1)",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            <Grid
              size={6}
              sx={{
                padding: "20px",
              }}
            >
              <img src={image} />
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "40px",
                }}
                variant="h1"
              >
                Comprehensive Crop Monitoring
              </Typography>
              <ul style={{ marginTop: "20px" }}>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Monitor each phase of planting, vegetative growth, flowering,
                  and harvesting using real-time tracking tools.
                </li>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Utilize IoT sensors and satellite imaging to assess the health
                  of your soil, the density of crops, and the overall
                  productivity of your farm.
                </li>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Recognize patterns in crop performance and foresee risks that
                  could potentially affect your yields.
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "40px",
              paddingLeft: "100px",
              paddingTop: "100px",
              backgroundColor: "rgba(55, 120, 105, 1)",
              borderRadius: "20px",
            }}
          >
            <Grid
              size={6}
              sx={{
                padding: "20px",
              }}
            >
              <img src={image} />
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "40px",
                }}
                variant="h1"
              >
                Comprehensive Crop Monitoring
              </Typography>
              <ul style={{ marginTop: "20px" }}>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Monitor each phase of planting, vegetative growth, flowering,
                  and harvesting using real-time tracking tools.
                </li>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Utilize IoT sensors and satellite imaging to assess the health
                  of your soil, the density of crops, and the overall
                  productivity of your farm.
                </li>
                <li
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500 ",
                    marginTop: "20px",
                  }}
                >
                  Recognize patterns in crop performance and foresee risks that
                  could potentially affect your yields.
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
