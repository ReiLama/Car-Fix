import React from "react";
import "./Login.scss";
import { Box, TextField, Typography, Button} from "@mui/material";


const Login = () => {
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
                padding={2}
                borderRadius={1}
                boxShadow={"5px 10px 10px #ccc"} 
                    
                sx={{
                    ":hover": {
                        boxShadow:"10px 10px 20px  blue",
                 },
                }}
            >
                <Typography variant="h3" padding={3} textAlign="center">Log In</Typography>
                <TextField margin="normal" type={'email'} variant="outlined" placeholder="Email" />
                <TextField margin="normal" type={'password'}variant="outlined" placeholder="Password"/>

                <Button sx={{marginTop:2}} variant="contained"  >Log in</Button>

                <Button sx={{marginTop:2}} >Forgot Password</Button>
                

            </Box>
        </form>
    
    </div>
    );
    

};

export default Login;