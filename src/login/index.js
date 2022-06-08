import React, { useState } from "react"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material"

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Box
      width={495}
      margin="0 auto"
      padding="117px 74px"
      bgcolor="#FCFCFC"
      borderRadius="11px"
    >
      <Box
        width="200px"
        margin="0 auto"
        marginBottom={6}
        sx={{
          "& img": {
            width: "100%",
          },
        }}
      >
        <img src="./dineritoxtra.png" alt="logo" />
      </Box>
      <Box component="form">
        <Stack>
          <TextField
            id="outlined-basic"
            label="Correo electronico"
            variant="outlined"
            sx={{
              marginBottom: 5,
            }}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={6}
            marginBottom={10}
          >
            <Link href="#">Olvidaste la contraseña?</Link>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Recuérdame"
            />
          </Stack>
          <Button
            sx={{
              backgroundColor: "#EC5B25",
              ":hover": { backgroundColor: "#EC5B25", opacity: "0.8" },
            }}
            variant="contained"
          >
            Iniciar sesión
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
