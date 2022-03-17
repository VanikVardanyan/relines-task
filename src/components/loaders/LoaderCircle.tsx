import React from "react";

import { Box, CircularProgress } from "@material-ui/core";

export const LoaderCircle: React.FC = () => {
  return (
    <Box className="circular-loader-custom">
      <CircularProgress />
    </Box>
  );
};
