import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useLayoutEffect, useState } from "react";

const EditService = ({ openServiceEdit, handleCloseServiceEdit, id }) => {

    const [service, setService] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState("");

    useLayoutEffect(()=>{
        fetch("http://localhost:5001/api/services/" + id)
        .then((res) => res.json())
        .then((data) => {
            setService(data.data);
            setTitle(service.title);
            setDesc(service.description);
            setPrice(service.price);
            setImage(service.image_url)
        })
    }, [openServiceEdit]);

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
        setPrice(Number(price));
        const json = {
            ...service,
            title: title,
            image_url: image,
            description: desc,
            price: price
        };
        fetch("http://localhost:5001/api/services/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        })
        .then(res => res.json())
        .then(resBody => console.log(resBody))
        handleCloseServiceEdit()
    };

    return ( 
        <Dialog open={openServiceEdit} onClose={handleCloseServiceEdit}>
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
                                <TextField value={title} onChange={e => setTitle(e.target.value)} id="outlined-basic" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={desc} onChange={e => setDesc(e.target.value)} id="outlined-basic" variant="outlined" fullWidth />
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
                <Button style={{ color: "#282F66" }} onClick={handleCloseServiceEdit}>Cancel</Button>
                <Button type="submit" style={{ color: "#282F66" }} >Save</Button>
                </DialogActions>
            </form>
        </Dialog>
     );
}
 
export default EditService;