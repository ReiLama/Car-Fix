import React, { useState } from "react";
import "./Login.scss";
import { Box, TextField, Typography, Button} from "@mui/material";


const Login = () => {

    const [logging, setLogging] = useState(true);

    return (
    <div>
        <form>
            <Box 
                display="flex" 
                flexDirection={"column"} 
                maxWidth={400} 
                alignItems="center" 
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"} 
                    
                sx={{
                    ":hover": {
                        boxShadow:"10px 10px 20px #ccc",
                 },
                }}
            >
                {
                    logging ? 
                    <Typography variant="h2" padding={3} textAlign="center">Login</Typography>
                    :
                    <Typography variant="h2" padding={3} textAlign="center">Singup</Typography>
                }
                {
                    logging ? 
                    <>
                    </>
                    :
                    <>
                        <TextField margin="normal" type={'text'} variant="outlined" placeholder="Name" />
                        <TextField margin="normal" type={'text'} variant="outlined" placeholder="Surname" />
                    </>
                }
                <TextField margin="normal" type={'email'} variant="outlined" placeholder="Email" />
                <TextField margin="normal" type={'password'}variant="outlined" placeholder="Password"/>
                {
                    logging ? 
                    <Button sx={{marginTop:3 ,borderRadius: 3, backgroundColor: "rgb(40, 47, 140)"}} variant="contained"  >LogIn</Button>
                    :
                    <Button sx={{marginTop:3 ,borderRadius: 3, backgroundColor: "rgb(40, 47, 140)"}} variant="contained"  >SingUp</Button>
                }
                {
                    logging ? 
                    <Button sx={{marginTop:3 ,borderRadius: 3, color: "rgb(40, 47, 140)"}} onClick={()=> setLogging(false)}  >Change to SignUp</Button>
                    :
                    <Button sx={{marginTop:3 ,borderRadius: 3, color: "rgb(40, 47, 140)"}} onClick={()=> setLogging(true)} >Change to LogIn</Button>
                }
                

            </Box>
        </form>
     
    </div>
    );
    

};

export default Login;