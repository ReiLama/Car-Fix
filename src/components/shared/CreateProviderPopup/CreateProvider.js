import { PhotoCamera } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const CreateProvider = ({ open, handleClose, city, setCity }) => {

    return ( 
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create a new provider</DialogTitle>
            <DialogContent>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="contained" component="label">
                                Upload Image
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Bio" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={city}
                                    label="City"
                                    onChange={(e)=> setCity(e.target.value)}
                                >
                                    <MenuItem value={10}>Durres</MenuItem>
                                    <MenuItem value={20}>Tirane</MenuItem>
                                    <MenuItem value={30}>Elbasan</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Zone" variant="outlined" fullWidth />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default CreateProvider;