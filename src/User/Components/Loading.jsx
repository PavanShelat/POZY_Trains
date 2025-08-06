import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Box>

      {/* Top Bar */}
      <Box display="flex" justifyContent="space-between"  >
        <Box display="flex" justifyContent="space-evenly" p={2} flexWrap="wrap" >
            <Skeleton variant="text" width={150} height={30} sx={{ bgcolor: "gray.300" }} />
            <Skeleton variant="text" width={200} height={30} sx={{ bgcolor: "gray.300" }} />
        </Box>
        <Box display="flex" justifyContent="space-between" p={2}>
            <Skeleton variant="text" width={150} height={30} sx={{ bgcolor: "gray.300" }} />
            <Skeleton variant="text" width={200} height={30} sx={{ bgcolor: "gray.300" }} />
        </Box>
      </Box>

      {/* Hero Section */}
      <Box position="relative" height={400} display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgcolor="gray.200">
        <Skeleton variant="text" width={300} height={50} sx={{ bgcolor: "gray.300" }} />
        <Skeleton variant="rounded" width={400} height={50} sx={{ bgcolor: "gray.300", mt: 2, borderRadius: 25 }} />
      </Box>

      {/* About Section */}
      <Stack spacing={2} p={4}>
        <Skeleton variant="text" width={150} height={30} />
        <Skeleton variant="text" width={300} height={40} />
        <Skeleton variant="rectangular" width="100%" height={200} />
      </Stack>
    </Box>
  );
};

export default Loading;
