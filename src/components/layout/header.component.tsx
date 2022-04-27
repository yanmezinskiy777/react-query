import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import style from "./header.style.module.css";

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
          <Link className={style.linkNav} to="/">Home</Link>
          <Link className={style.linkNav} to="/users">Users</Link>
          <Link className={style.linkNav} to="/blog">Blog</Link>
          <Link className={style.linkNav} to="/dynamic-blog">Dynamic Blog</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
