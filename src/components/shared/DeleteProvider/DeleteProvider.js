import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

export default function DeleteProvider({ openDelete, handleCloseDelete, id }) {

    const navigate = useNavigate();

    const deleteProvider = () => {
        fetch("http://localhost:5001/api/providers/" + id, {
            method: "delete"
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data.data);
            navigate("/providers")
        });
        handleCloseDelete()
    }

  return (
    <div>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this provider?"}
        </DialogTitle>
        <DialogActions>
          <Button style={{ color: "grey" }} onClick={handleCloseDelete}>Cancel</Button>
          <Button color="error" onClick={deleteProvider} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}