import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";

const CreateService = ({ openService, handleCloseService, id }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(null);
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
    };

    const handleSubmit = () => {
        const url = `http://localhost:5001/static/${image}`;
        setPrice(Number(price));
        const json = {
            title: title,
            image_url: url,
            description: desc,
            providers_id: id,
            price: price,
            id: Math.floor((Math.random() * 100000000))
        };
        fetch("http://localhost:5001/api/services", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
            
        })
        .then(res => res.json())
        .then(resBody => console.log(resBody))
        handleCloseService()
    };

    return ( 
        <Dialog open={openService} onClose={handleCloseService}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Create a new service</DialogTitle>
                <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button style={{ backgroundColor: "#282F66" }} variant="contained" component="label">
                                    Upload Image
                                    <input onChange={fileOnchange} hidden type="file" />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={title} onChange={e => setTitle(e.target.value[20])} id="outlined-basic" label="Title" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={desc} onChange={e => setDesc(e.target.value)} id="outlined-basic" label="Description" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                    value={price} onChange={e => setPrice(e.target.value)}
                                />
                                </FormControl>
                            </Grid>
                        </Grid>
                </DialogContent>
                <DialogActions>
                <Button style={{ color: "#282F66" }} onClick={handleCloseService}>Cancel</Button>
                <Button type="submit" style={{ color: "#282F66" }} >Save</Button>
                </DialogActions>
            </form>
        </Dialog>
     );
}
 
export default CreateService;