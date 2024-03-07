import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "inherit",
        minHeight: '100vh',
        maxHeight: "100%",
      }}
    >
      <Sidebar></Sidebar>
      <Box
        sx={{
          width: "100%",
          overflowY: "inherit",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
