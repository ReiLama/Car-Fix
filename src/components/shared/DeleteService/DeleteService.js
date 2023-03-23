import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const DeleteService = ({ openDeleteService, handleCloseDeleteService, id, providers_id }) => {

        const deleteService = () => {
            fetch("http://localhost:5001/api/services/" + id, {
                method: "delete"
            })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data.data);
                window.location.reload(false);
            });
            handleCloseDeleteService()
        }
    
      return (
        <div>
          <Dialog
            open={openDeleteService}
            onClose={handleCloseDeleteService}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to delete this service?"}
            </DialogTitle>
            <DialogActions>
              <Button style={{ color: "grey" }} onClick={handleCloseDeleteService}>Cancel</Button>
              <Button color="error" onClick={deleteService} autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}
 
export default DeleteService;