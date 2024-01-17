import React, {useState, useEffect} from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider,createMuiTheme } from "@mui/material/styles";
import Layout from '@theme/Layout';
import styles from './index.module.css';
import axios from "axios";
import UserProfile from "../components/UserProfile";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const theme = createMuiTheme({
  palette: {
    mode: "dark"
  }
 
  

});



export default function SignUp() {
  // console.log(UserProfile.getEmail())
  useEffect(() => {
    if(UserProfile.getEmail()!=false) {
        const allWithClass = Array.from(
            document.getElementsByClassName('navbar__items navbar__items--right')
        
        );
        for (let x = 0; x< allWithClass[0].children.length; x++) {
            // Do stuff
            
            let element = allWithClass[0].children[x];
            
            if(element.innerHTML == 'Login') {
                element.innerHTML = UserProfile.getEmail()
                element.href = '#'
            } else {
                console.log(element.innerHTML)
            }
        }
    } else {

    }
  }, []);


  const [formError, setFormError] = React.useState('Signup')  
  const [showLoader, setShowLoader] = useState(false)
 

  function sendSignupRequest(signupData) {

    let urlstring = `https://ai-api-alpha.vercel.app/api/signup_request?signup_data=${JSON.stringify(signupData)}`
    // let urlstring = `http://localhost:3000/api/signup_request?signup_data=${JSON.stringify(signupData)}`
    console.log(urlstring)
    setShowLoader(true)
    axios.get(urlstring)
    .then((data) => {
      let signup_response = data.data.message; 
        setFormError(signup_response)
        setShowLoader(false)
        if(signup_response=='User Registered') {
          UserProfile.setEmail(signupData.email)
          console.log(signup_response)
          window.location = '/login'
        }
        
    })
    .catch(error => console.log(error));

}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    if (!email) {
      setFormError("Please enter email");
    } else if (!password) {
      setFormError("Please enter password");
    } else {
      setFormError("");
      let signupData = {
        email: data.get("email"),
        password: data.get("password"),
        firstname: data.get("firstName"),
        lastname: data.get("lastName")
      } 
      console.log(signupData);
      sendSignupRequest(signupData);
    }
   
  };

  function SignUpForm() {

    return (
  
      <ThemeProvider theme={theme}>
                {showLoader &&  <DisplayLoader />}

      <Container component="main" maxWidth="xs"
      // sx={{bgcolor: "rgba(0, 0, 0, 0.87)"}}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: -4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {formError}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  
    )
  
  }

  return (
    <Layout title="Python IDE" >
            <main className={styles.signup}>
                <div className={styles.heroContainer} >
                    {/* <h1>Python IDE</h1> */}
                   
                    {/* <p className={styles.tagline}>A no-nonsense markdown-only template with runnable and editable Python code blocks</p> */}
                    {/* <Link className={"button button--primary"} href={"docs/intro"}>Get Started</Link> */}
                    <div className={styles.codeEditorWrapper} >
                        {SignUpForm()}
                    </div>
                </div>
            </main>
        </Layout>
  
  );
}