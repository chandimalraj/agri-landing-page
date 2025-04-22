import React from 'react';
import { Box, Typography } from '@mui/material';

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <Box
      sx={{
       
        borderRadius: '10px',
        textAlign: 'center',
        p: 3,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: '100%',
          borderRadius: '10px',
          marginBottom: '1rem',
        }}
      />
      <Typography
        variant="h6"
        component="h2"
        fontWeight="bold"
        color="white"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant="body1" color="white">
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureCard;
