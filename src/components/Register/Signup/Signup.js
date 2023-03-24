import React from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";


const Signup = () => {
    let navigate = useNavigate();
    const routeLogin = () => {
        let path = `/Login`;
        navigate(path);
    }
    return (
        <div>
            <form>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={450}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={4}
                    padding={3}
                    marginBottom={4}
                    borderRadius={1}
                    boxShadow={"5px 10px 10px 10px #ccc"}

                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px  blue",
                        },
                    }}
                >
                    <Typography variant="h3" padding={3} textAlign="center">Sign Up</Typography>
                    <TextField margin="normal" type={'text'} variant="outlined" placeholder="Name" />
                    <TextField margin="normal" type={'email'} variant="outlined" placeholder="Email" />
                    <TextField margin="normal" type={'password'} variant="outlined" placeholder="Password" />
                    <TextField margin="normal" type={'password'} variant="outlined" placeholder="Confirm Password" />

                    <Button sx={{ marginTop: 2 }} type="submit" variant="contained"> Sign UP </Button>
                    <Button sx={{ marginTop: 2 }} type="submit" onClick={routeLogin}> Already have an account </Button>

                </Box>
            </form>

        </div>
    );


};

export default Signup;