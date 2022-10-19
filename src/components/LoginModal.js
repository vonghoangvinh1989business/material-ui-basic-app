import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginModalContext } from "../App";
import { FormProvider, FTextField } from "./form";
import {
  Stack,
  IconButton,
  InputAdornment,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";

export default function LoginModal() {
  const { openLoginModal, handleCloseLoginModal } =
    useContext(LoginModalContext);

  const defaultValues = {
    username: "hoangvinh",
    password: "123456",
  };

  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    maxWidth: "500px",
  };

  const textFieldStyle = {
    "& label.Mui-focused": {
      color: "rgb(215, 71, 66)",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgb(215, 71, 66)",
      },
    },
  };

  return (
    <div>
      <Dialog open={openLoginModal} onClose={handleCloseLoginModal}>
        <DialogTitle
          sx={{ display: "flex", justifyContent: "center" }}
          textAlign="center"
        >
          <Box>
            <Avatar sx={{ bgcolor: "rgb(215, 71, 66)" }}>
              <LockOutlinedIcon
                fontSize="small"
                sx={{
                  color: "black",
                  borderRadius: "50%",
                  bgcolor: "rgb(215, 71, 66)",
                }}
              />
            </Avatar>
            <Typography>Log In</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={style}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <FTextField
                  sx={textFieldStyle}
                  name="username"
                  label="User name"
                />
                <FTextField
                  name="password"
                  label="Password"
                  sx={textFieldStyle}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "rgb(215, 71, 66)",
                    "&:hover": {
                      backgroundColor: "rgb(150, 49, 46)",
                    },
                  }}
                  size="small"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Sign In
                </Button>
              </Stack>
            </FormProvider>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
