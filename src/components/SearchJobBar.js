import * as React from "react";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled, alpha } from "@mui/material/styles";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Stack,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchJobBar() {
  const mobileMenuId = "primary-search-account-menu-mobile";
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  // handle login button
  const handleLoginButton = () => {
    navigate("/login");
  };

  // handle logout button
  const handleLogoutButton = () => {
    auth.signout();
    navigate("/");
  };

  // handle submit search
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    let q = new FormData(event.target).get("q");
    setSearchParams({ q: q });
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Job Routing
          </Typography>

          <Box component="form" onSubmit={handleSubmitSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                name="q"
                defaultvalues={q ?? undefined}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {auth.user ? (
              <>
                <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
                  <Avatar
                    sx={{ bgcolor: "rgb(255, 167, 38)", width: 25, height: 25 }}
                  >
                    <AccountCircleIcon fontSize="small" />
                  </Avatar>
                  <Typography sx={{ textAlign: "center" }}>
                    {auth.user}
                  </Typography>
                </Stack>

                <Button
                  onClick={handleLogoutButton}
                  size="medium"
                  color="inherit"
                  startIcon={<LogoutIcon />}
                >
                  <Typography sx={{ textTransform: "capitalize" }}>
                    Sign out
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleLoginButton}
                  size="medium"
                  color="inherit"
                  startIcon={<LoginIcon />}
                >
                  <Typography sx={{ textTransform: "capitalize" }}>
                    Sign in
                  </Typography>
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton></IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
