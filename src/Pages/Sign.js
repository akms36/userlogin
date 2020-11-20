import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import LOGO from "../ASSETS/A.png"
import MainGrid from "../ASSETS/gridview.png"



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:"blue",
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignInSide(props) {
  const classes = useStyles();
  // const username = useFormInput('');
  // const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [myValue, setValue] = useState('') 
  const [myValuePass, setValuePass] = useState('') 
  // const [value, setValue] = useState(initialValue);
 
    
  function handleLogin () {
    props.history.push('/dashboard');
  }
  // const handleLogin = () => {
  //   setError(null);
  //   setLoading(true);
  //   axios.post('http://pro.nergy360.com/api/auth', { emailAddress: myValue, passeword: myValuePass }).then(response => {
  //     setLoading(false);
  //     setUserSession(response.data.token, response.data.user);
  //     props.history.push('/dashboard');
  //   }).catch(error => {
  //     console.log(error,"error")
  //     setLoading(false);
  //     if (error.response.status === 401) setError(error.response.data.message);
  //     else setError("Something went wrong. Please try again later.");
  //   });
  // }
 
   
    
  
  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}> */}
            {/* <LockOutlinedIcon /> */}
            {/* <LOGO/> */}
          {/* </Avatar> */}

         
          <form className={classes.form} noValidate >
            
          <img src={LOGO} alt="LOGO"  style={{paddingBottom:"1rem"}} />

          <Typography component="h1" variant="h4" style={{paddingBottom:"1rem"}}>
          Log in to your account
          </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={myValuePass} 
              onChange={(e) => setValuePass(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={myValue} 
              onChange={(e) => setValue(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} >

      <img src={MainGrid} alt="MainGrid" style={{width:"100%",height:"100%"}}   />
      
</Grid>
    </Grid>
  );}
  // const useFormInput = initialValue => {
  //   const [value, setValue] = useState(initialValue);
   
  //   const handleChange = e => {
  //     setValue(e.target.value);
  //   }
  //   return {
  //     value,
  //     onChange: handleChange
  //   }
  // }

export default SignInSide;