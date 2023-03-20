import { PhotoCamera } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";

const CreateService = ({ openService, handleCloseService, category, setCategory }) => {
    return ( 
        <Dialog open={openService} onClose={handleCloseService}>
            <DialogTitle>Create a new service</DialogTitle>
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
                            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Category"
                                    onChange={(e)=> setCategory(e.target.value)}
                                >
                                    <MenuItem value={"Mechanic"}>Mechanic</MenuItem>
                                    <MenuItem value={"Hydraulic"}>Hydraulic</MenuItem>
                                    <MenuItem value={"Electronic"}>Electronic</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseService}>Cancel</Button>
            <Button onClick={handleCloseService}>Save</Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default CreateService;