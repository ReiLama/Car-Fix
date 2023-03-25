import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const CreateProvider = ({ open, handleClose }) => {

    const navigate = useNavigate();

    const [logged] = useState(true);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [id] = useState(Math.floor((Math.random() * 100000000)));
    const [image, setImage] = useState("");

    const fileOnchange = (e) => {
        setImage(e.target.files[0].name);
        let formData = new FormData();
        formData.append('image', e.target.files[0])

        fetch("http://localhost:5001/api/providers/images", {
            method: "post",
            body: formData
        })
        .then((res)=> res.json())
        .then((body) => console.log(body))
    }
 
    const handleSubmit = () => {
        const url = `http://localhost:5001/static/${image}`;
        const json = {
            location: location,
            image_url: url,
            name: name,
            bio: bio,
            id: id
        };
        fetch("http://localhost:5001/api/providers", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        }).then(()=>{
            navigate('/provider_details/' + id)
        })
    };

    return ( 
        <Dialog open={open}>
            { 
                logged ?            
                <form>
                    <DialogTitle>Create a new provider</DialogTitle>
                    <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button style={{ backgroundColor: "#282F66" }} variant="contained" component="label">
                                        Upload Image
                                        <input onChange={fileOnchange} hidden type="file" />
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField value={name} onChange={e => setName(e.target.value[25])} id="outlined-basic" label="Name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField value={bio} onChange={e => setBio(e.target.value)} id="outlined-basic" label="Bio" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField value={location} onChange={e => setLocation(e.target.value[15])} id="outlined-basic" label="Location" variant="outlined" fullWidth />
                                </Grid>
                            </Grid>
                    </DialogContent>
                    <DialogActions>
                    <Button style={{ color: "#282F66" }} onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} style={{ color: "#282F66" }}>Submit</Button>
                    </DialogActions>
                </form>
                :
                <>
                    <DialogTitle>Log in or register to create a new provider</DialogTitle>
                    <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button variant="contained" style={{ backgroundColor: "#282F66" }}><Link style={{ color: "white", textDecoration: "none" }} to="/login">Log In</Link></Button>
                                </Grid>
                            </Grid>
                    </DialogContent>
                    <DialogActions>
                    <Button style={{ color: "#282F66" }} onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </>
            }
        </Dialog>
     );
}
 
export default CreateProvider;