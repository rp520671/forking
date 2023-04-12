import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { green, red} from '@mui/material/colors';
import DatePicker from './DatePicker';
import Radiobutton from './Radiobutton';
import TextFile from './textbar';




const theme = createTheme(
    {
       status: {
        primary:red,

       }
    }
);

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        fullname: data.get('full name'),
      email: data.get('email'),

    });

   
  };

  return (
    <>
   
    <ThemeProvider theme={theme}>
      <Grid container component="main" backgroundColor= 'cyan'>
        <CssBaseline/>
         <Grid item xs={10} sm={8} md={5} 
         sx={{backgroundColor: (t) =>
         t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
           
            }} component={Paper} elevation={24} square   > 
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
              
            }}
          >
            <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
            </Avatar>
  
            <Typography component="h1" variant="h5" >
              <b>SIGN UP</b>
            </Typography>
            <TextFile/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
             
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <DatePicker 
                            margin="normal"/>
                
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Radiobutton/>
                        </Grid>
                </Grid>     
            
               </Box>
               <TextField
                margin="normal"
                name="Password"
                label="Password"
                type="Password"
                id="Password"
                autoComplete="Password"
                fullWidth
                required
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          
        
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(  )' ,
            backgroundRepeat: 'no-repeat',
            backgroundSize : 'cover',
            backgroundPosition:'center',
            display:{xs:"none",sm:"block"}
            
          }}
        /> 
      </Grid>
    </ThemeProvider>
    </>
  );
}