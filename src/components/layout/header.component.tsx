import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" color="inherit" aria-label="logo" edge="start">
          <QueryBuilderOutlinedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          QUERY
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link color="white" to="/">Home</Link>
          <Link color="white" to="/users">Users</Link>
          <Link color="white" to="/blog">Blog</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
