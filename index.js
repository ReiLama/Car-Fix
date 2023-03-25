const express = require('express');
const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch');
const initial_services = require('./initialData/services');
const initial_providers = require('./initialData/providers');
const LS = require('./helpers/localStorage');
const app = express();
const port = 5001;
const cors = require('cors');

app.use(cors());
app.use('/static', express.static('images'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage});

// this is important to disable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

let providers = LS.all('providers');

console.log(`providers ne local storage ne momentin qe serveri ndizet: ${providers.length}`);

if (providers.length == 0) {
  LS.addALL('services', initial_services);
  LS.addALL('providers', initial_providers);
}

//SERVICES/////////////

app.get('/api/services', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.all('services')
  })
});

app.get('/api/services/:serviceId', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.find('services', req.params.serviceId)
  })
})

app.get('/api/provider_services/:providerId', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.findGroup('services', req.params.providerId)
  })
})

app.post('/api/services', (req, res) => {
  const created_service = LS.create('services', req.body);
  res.json({
    "status": "success",
    "data": created_service
  })
})

app.put('/api/services/:serviceId', (req, res) => {
  const edited_service = LS.edit('services', req.body, req.params.serviceId);
  res.json({
    "status": "success",
    "data": edited_service
  })
})

app.delete('/api/services/:serviceId', (req, res) => {
  const services = LS.delete('services', req.params.serviceId);
  res.json({
    "status": "success",
    "data": services
  })
})

//PROVIDERS///////////

app.get('/api/providers', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.all('providers')
  })
})

app.get('/api/providers/:providerId', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.find('providers', req.params.providerId)
  })
})

app.post('/api/providers/images', upload.single('image') , (req, res) => {
  res.json({
    "status": "success",
    "data": req.body
  })
})

app.post('/api/providers', upload.single('image') , (req, res) => {
  const created_provider = LS.create('providers', req.body);
  res.json({
    "status": "success",
    "data": created_provider
  })
})

app.put('/api/providers/:providerId', (req, res) => {
  const edited_provider = LS.edit('providers', req.body, req.params.providerId);
  res.json({
    "status": "success",
    "data": edited_provider
  })
})

app.delete('/api/providers/:providerId', (req, res) => {
  const providers = LS.deleteProvider('providers', req.params.providerId, 'services');
  res.json({
    "status": "success",
    "data": providers
  })
})

////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})