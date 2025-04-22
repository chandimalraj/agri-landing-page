import React from "react";
import styles from "./ContactSection.module.css";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import envelope from "../../assets/icons/envelope.png";
import phone from "../../assets/icons/phone.png";
import map from "../../assets/icons/map.png";

export default function ContactSection() {
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
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "rgba(121, 213, 83, 1)",
            }}
          >
            Connect
          </Typography>
        </Grid>
        <Grid size={12} className={styles.leftSection}>
          <Typography
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
          >
            Get in Touch
          </Typography>
        </Grid>
        <Grid size={12} className={styles.leftSection}>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "400", color: "white" }}
          >
            We'd love to hear from you!
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: {
              lg: "1200px",
              xl: "1500px",
            },
            paddingTop: "100px",
          }}
        >
          <Grid
            size={4}
            sx={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={envelope} style={{ width: "48px" }} />
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "white",
                marginTop: "10px",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                marginTop: "10px",
              }}
            >
              Reach us anytime at our official email address.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                marginTop: "10px",
              }}
            >
              <Link
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                hello@skycrop.io
              </Link>
            </Typography>
          </Grid>
          <Grid
            size={4}
            sx={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={phone} style={{ width: "48px" }} />
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "white",
                marginTop: "10px",
              }}
            >
              Phone
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                marginTop: "10px",
              }}
            >
              Call us for immediate assistance or inquiries.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                marginTop: "10px",
              }}
            >
              +94 (xxxx) xxxx-xxxxxx
            </Typography>
          </Grid>
          <Grid
            size={4}
            sx={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={map} style={{ width: "48px" }} />
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "white",
                marginTop: "10px",
              }}
            >
              Office
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                marginTop: "10px",
              }}
            >
              Visit us at our headquarters for personalized service.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                marginTop: "10px",
              }}
            >
              456 Example Ave, Melbourne VIC 3000 AU
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
