import axios from "axios"

const URL = "https://example.com"

const login = "/api/v1/outth/login"

export function SingIn(values) {
  return axios.post(`${URL}/${login}`, {
    password: values.password,
    email: values.email,
  })
}
