import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reservation from './reservation';

const Reserve = ({ open, handleClose }) => {

    const navigate = useNavigate();

    const [id] = useState(Math.floor((Math.random() * 100000000)));
    const [image, setImage] = useState("");
    const [note, setNote] = useState("");

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

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    }
 
    const handleSubmit = () => {
        const url = `http://localhost:5001/static/${image}`;
        const json = {
            id: id,
            image_url: url,
            note: note
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
                            <TextField value={note} onChange={handleNoteChange} id="outlined-basic" label="Note" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item>
                            <Reservation />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                <Button style={{ color: "#282F66" }} onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} style={{ color: "#282F66" }}>Reserve</Button>
                </DialogActions>
            </form>
        </Dialog>
     );
}
 
export default Reserve;

                                           
