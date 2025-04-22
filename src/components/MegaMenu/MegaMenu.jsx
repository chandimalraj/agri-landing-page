import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import React from "react";
import Relume from "../../assets/icons/RelumeMenu.png";
import Expert from "../../assets/images/expertimage.png";
import Innovative from "../../assets/images/innovativeimage.png";
import Right from "../../assets/icons/chevron-right.png";

export default function MegaMenu({ anchorEl, handleClose }) {
  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // MenuListProps={{
        //   sx: { padding: 2 },
        // }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: {
            // width: "100%",
            // maxWidth: "1000px",
            // padding: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            background:
              "linear-gradient(101.69deg, #193E36 62.64%, #FFFFFF 225.51%)",
          },
        }}
      >
        <Grid
          container
          sx={{
            width: {
              lg: "1200px",
              xl: "1500px",
            },
          }}
        >
          <Grid
            size={8}
            xs={12}
            md={4}
            sx={{
              background:
                "linear-gradient(101.69deg, #193E36 62.64%, #FFFFFF 225.51%)",
            }}
          >
            <Grid container spacing={2}>
              <Grid size={6} xs={12} md={6} sx={{ padding: "20px" }}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Explore Our Services
                </Typography>
                <List dense>
                  {[
                    {
                      primary: "Consulting Services",
                      secondary: "Discover how we can assist your business.",
                    },
                    {
                      primary: "Data Analysis",
                      secondary: "Unlock insights from your data with us.",
                    },
                    {
                      primary: "Market Research",
                      secondary: "Stay ahead with our market insights.",
                    },
                    {
                      primary: "Client Support",
                      secondary: "We're here to help you succeed.",
                    },
                  ].map((text) => (
                    <ListItem key={text}>
                      <ListItemIcon>
                        <img
                          src={Relume}
                          alt="Relume"
                          style={{ width: 24, height: 24 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={text.primary}
                        secondary={text.secondary}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid size={6} xs={12} md={6} sx={{ padding: "20px" }}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Latest Blog Posts
                </Typography>
                <List dense>
                  {[
                    {
                      primary: "Trends in Analytics",
                      secondary: "Stay updated on the latest industry trends.",
                    },
                    {
                      primary: "Case Studies",
                      secondary: "Learn from our successful projects.",
                    },
                    {
                      primary: "Expert Insights",
                      secondary: "Gain knowledge from our expert articles.",
                    },
                    {
                      primary: "Webinars",
                      secondary:
                        "Join our upcoming webinars for more information.",
                    },
                  ].map((text) => (
                    <ListItem key={text}>
                      <ListItemIcon>
                        <img
                          src={Relume}
                          alt="Relume"
                          style={{ width: 24, height: 24 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={text.primary}
                        secondary={text.secondary}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            size={4}
            xs={12}
            md={4}
            sx={{
              background:
                "linear-gradient(243.01deg, #193E36 36.12%, #FFFFFF 265.25%)",
              padding: "20px",
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              Featured Articles
            </Typography>
            {[
              {
                primary: "Innovative Solutions",
                secondary: "Explore our innovative solutions for your needs.",
                img: Expert,
                link: "",
              },
              {
                primary: "Expert Advice",
                secondary: "Get ecpert advice on analytics and data.",
                img: Innovative,
                link: "",
              },
            ].map((i) => (
              <Box key={i} sx={{ display: "flex", mb: 2 }}>
                <img
                  src={i.img}
                  alt="Featured"
                  style={{ marginRight: 8, borderRadius: 4 }}
                />
                <Box sx={{}}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {i.primary}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    {i.secondary}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginTop: "18px",
                      textDecoration:"underline"
                    }}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
            ))}
            <Button
              variant="outlined"
              size="small"
              sx={{ mt: 1, border: "none", color: "black" }}
            >
              <Typography sx={{ textTransform: "capitalize", display:"flex" }}>
                Button <img src={Right} style={{ }}/>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
}
