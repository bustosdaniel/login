import React, { useState } from "react"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { toast } from "react-toastify"
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
  Stack,
} from "@mui/material"

import { LoadingButton } from "@mui/lab"
import { SingIn } from "../api"

const URL = "https://example.com"

const login = "/api/v1/outth/login"

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const onSumbit = async (values) => {
    try {
      const response = await SingIn(values)
      console.log(response)
    } catch (error) {
      console.error(error)
      toast(`${error.detail}, intenta de nuevo|`)
    } finally {
      setLoading(false)
    }
  }

  const HandleSumbit = () => {
    const parameters = {
      password: values.password,
      email: values.email,
    }
    setLoading(true)
    onSumbit(parameters)
    fetch(`${URL}/${login}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(parameters),
    })
      .then((response) => {
        return response.json()
      })
      .catch((error) => {
        console.error("fallo", error.errors.detail)
      })
      .then((res) => {
        console.log(res)
        toast(`${res.errors.detail}, intenta de nuevo|`)
        return res
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  console.log(loading)
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
        <img src="./balones.jpg" alt="logo" />
      </Box>
      <Box component="form">
        <Stack>
          <TextField
            id="outlined-basic"
            label="Correo electronico"
            variant="outlined"
            onChange={(event) => handleChange("email", event)}
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
          <LoadingButton
            sx={{
              backgroundColor: "#EC5B25",
              ":hover": { backgroundColor: "#EC5B25", opacity: "0.8" },
            }}
            variant="contained"
            onClick={HandleSumbit}
            loading={loading}
          >
            Iniciar sesión
          </LoadingButton>
        </Stack>
      </Box>
    </Box>
  )
}
