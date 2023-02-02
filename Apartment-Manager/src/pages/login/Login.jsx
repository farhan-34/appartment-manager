import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {

  const theme = useTheme();
    const { register, 
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      // const {username, password} = data
      // const response = await axios.post(login_url, JSON.stringify({username, password}), {
      //   headers: { 'Content-Type': 'apllication/json'},
      //   withCredentials: true
      // })

    }

  return (
    <Grid direction={"row"} justifyContent="center" alignItems={"center"} container sx={{ backgroundColor: 'lavender', height: '100vh'}}>
      <Grid item sx={{minWidth: '250px'}} xs={8} sm={8} md={6} lg={4} xl={4}>
    <Paper sx={{padding:2, py: 3}}>
      <Container maxWidth='xs'>
        <Typography
          color={theme.palette.secondary.main}
          variant='h4'
          component='h2'
        >Welcome!
        </Typography>
        <Typography
        component={'body'}
        color={theme.palette.primary.light}
        sx={{mb:5}}>
          Please enter your username and password.
        </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} alignItems="center">
              <TextField
                  variant='outlined'
                  label='Username'
                  fullWidth
                  autoFocus
                  {...register('username', {
                      required: "Please enter your username",
                  })}
                  error={!!errors?.username}
                  helperText={errors?.username ? errors.username.message : null}
              />
              <TextField
                variant='outlined'
                label='Password'
                fullWidth
                type="password"
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null}
                {...register('password', {
                  required: 'Please enter password',
                  minLength: 4
                })}
              />
              <Button
                type='submit'
                variant='contained'
                title='Login'
                sx={{mt: 3, width: '30%'}}
              >Login</Button>
              </Stack>
          </form>
      </Container>
      </Paper>
      </Grid>
      </Grid>
  )
}

export default Login