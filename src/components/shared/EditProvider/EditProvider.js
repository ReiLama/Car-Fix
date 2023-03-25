import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const EditProvider = ({ openProviderEdit, handleCloseProviderEdit, id, provider }) => {

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");

    useEffect(()=>{
        setName(provider.name);
        setBio(provider.bio);
        setLocation(provider.location);
        setImage(provider.image_url);
    }, [openProviderEdit]);

    const fileOnchange = (e) => {
        setImage("http://localhost:5001/static/" + e.target.files[0].name);
        let formData = new FormData();
        formData.append('image', e.target.files[0])

        fetch("http://localhost:5001/api/providers/images", {
            method: "post",
            body: formData
        })
        .then((res)=> res.json())
        .then((body) => console.log(body))
    };

    const handleSubmit = () => {
        const json = {
            ...provider,
            location: location,
            image_url: image,
            name: name,
            bio: bio,
        };
        fetch("http://localhost:5001/api/providers/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        })
        .then(res => res.json())
        .then(resBody => console.log(resBody))
        handleCloseProviderEdit()
    };

    return ( 
        <Dialog open={openProviderEdit} onClose={handleCloseProviderEdit}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Edit service</DialogTitle>
                <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button style={{ backgroundColor: "#282F66" }} variant="contained" component="label">
                                    Upload Image
                                    <input onChange={fileOnchange} hidden type="file" />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={name} onChange={e => setName(e.target.value)} id="outlined-basic" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={bio} onChange={e => setBio(e.target.value)} id="outlined-basic" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={location} onChange={e => setLocation(e.target.value)} id="outlined-basic" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                </DialogContent>
                <DialogActions>
                <Button style={{ color: "#282F66" }} onClick={handleCloseProviderEdit}>Cancel</Button>
                <Button type="submit" style={{ color: "#282F66" }} >Save</Button>
                </DialogActions>
            </form>
        </Dialog>
     );
}
 
export default EditProvider;