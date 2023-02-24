import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const LayoutAppBar = () => {
  return (
    <AppBar position="static" color={"secondary"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >

          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default LayoutAppBar;
