import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Col, Divider, Row } from 'antd';
import { Typography, Container } from '@mui/material';
import  './mycars.scss';
// Define a custom Card component with some additional styles

const CustomCard = styled(Card)(({ theme }) => ({
  width:'300px', 
  marginTop:'20px',
  margin: 'auto',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
  },
  
  '& img': {
    height: 230,
    width: 300,
    objectFit: 'cover',
  },
  '& h3': {
    marginBottom: theme.spacing(1),
  }
}));

function Cars() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = [...formData, { picture, name, brand, licensePlate, year, type }];
    setFormData(newFormData);
    setPicture('');
    setName('');
    setBrand('');
    setLicensePlate('');
    setYear('');
    setType('');
    setOpen(false);
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="App" style={{ padding: '50px' }}>
        <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        width={'523px'}
        color="rgb(40, 47, 140)" 
        font-style={"normal"}
        font-family={"Nunito"}
        font-weight={"700px"}
        font-size={"80px"}
        line-height={"109px"}
        fontSize="50px"
        >
          My Cars
        </Typography>
      <Divider orientation='right'>
        <Button variant="contained" fontSize="30px" font-weight="700px" onClick={() => setOpen(true)} style={{paddingLeft:'40px', paddingRight:'40px', backgroundColor:'rgb(40, 47, 140)'}}>
          Add Car
        </Button>
      </Divider>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <input type="file" id="file" label="Picture" variant="outlined" fullWidth onChange={handlePictureChange} />   
              </Grid>
              <Grid item xs={12}>
                <TextField label="Name" variant="outlined" fullWidth value={name} onChange={handleNameChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Brand" variant="outlined" fullWidth value={brand} onChange={handleBrandChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="License Plate" variant="outlined" fullWidth value={licensePlate} onChange={handleLicensePlateChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Year" variant="outlined" fullWidth value={year} onChange={handleYearChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Type" variant="outlined" fullWidth value={type} onChange={handleTypeChange} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Add
                </Button>
              </Grid>
            </Grid>
      </form>
    </DialogContent>
  </Dialog>
  <Grid container spacing={3} justifyContent="left">
    {formData.map((data, index) => (
      <Grid item key={index}>
        <CustomCard>
          <CardMedia
            component="img"
            image={data.picture}
            alt={data.name}
          >
          </CardMedia>
          <CardContent>
            <Container>
            <Grid>
              <Row>
              <Col span={12}>
                <h3>Name</h3>
                <p>Brand</p>
                <p>License Plate</p>
                <p>Year</p>
                <p>Type</p>
              </Col>
              <Col span={12}>
                <h3>{data.name}</h3>
                <p>{data.brand}</p>
                <p>{data.licensePlate}</p>
                <p>{data.year}</p>
                <p>{data.type}</p> 
                </Col>
                </Row>
            </Grid>
            </Container>
          </CardContent>
        </CustomCard>
      </Grid>
    ))}
  </Grid>
</div>
);
}

export default Cars;