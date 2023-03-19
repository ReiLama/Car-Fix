import React from "react";
import "./Login.scss";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={450}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={4}
                    padding={2}
                    borderRadius={1}
                    boxShadow={"5px 10px 10px #ccc"}

                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px  blue",
                        },
                    }}
                >
                    <Typography variant="h3" padding={3} textAlign="center">Log In</Typography>
                    <TextField margin="normal" label="Email" type={'email'} id="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                    <TextField margin="normal" label="Password" type={'password'} id="password" value={password} onChange={handlePasswordChange} placeholder="Password" />

                    <Button sx={{ marginTop: 2 }} type="submit" variant="contained"  >Log in</Button>

                    <Button sx={{ marginTop: 2 }} type="submit" >Forgot Password</Button>
                    <Button sx={{ marginTop: 2 }} type="submit" > Create new account</Button>


                </Box>
            </form>

        </div>
    );


};

export default Login;