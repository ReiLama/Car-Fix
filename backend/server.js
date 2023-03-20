const express = require('express');

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 5000;

const servicesRoute = require('./routes/services');
const providersRoute = require('./routes/providers');
app.use('/services', servicesRoute);
app.use('/providers', providersRoute);

// this is important to disable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Car fix listening on port ${port}`)
})