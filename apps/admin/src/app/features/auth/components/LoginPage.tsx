import { Box, Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SignInDto } from "@ems/validation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { api } from "@ems/services";
import { HttpStatusCode, isAxiosError } from "axios";
import { AuthErrorHandler } from "./AuthErrorHandler";
import { useAuth, useLogin } from "../auth.hooks";
import { useNavigate } from "react-router-dom";
export function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInDto>({ resolver: classValidatorResolver(SignInDto) });
  const [error, setError] = useState<HttpStatusCode>() //we always throw "Invalid credentials" on UI for security reasons, but we created an error handler.
  const login = useLogin()
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/app')
  }, [isLoggedIn, navigate])


  const handleLogin: SubmitHandler<SignInDto> = async (data: SignInDto) => {
    try {
      await api.auth.signIn(data);
      login()
    } catch (e) {
      if (isAxiosError(e)) {
        setError(e.response?.status)
      }
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <Paper component="form" onSubmit={handleSubmit(handleLogin)} sx={{
        display: 'flex',
        gap: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 300,
        padding: 3,
      }}>
        <AuthErrorHandler statusCode={error} />
        <TextField type="text" label="Username" variant="standard" {...register("email")} error={errors.email?.message ? true : false} helperText={
          errors.email?.message
        } sx={{ width: '100%' }} />
        <TextField type="password" label="Password" variant="standard" {...register("password")} error={errors.password?.message ? true : false} helperText={
          errors.password?.message
        } sx={{ width: '100%' }} />
        <Button type="submit">Log In</Button>
      </Paper>
    </Box>
  )
}
