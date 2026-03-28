const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'DermisClinic App is LIVE!',
    clinic: 'DERMISCLINICS PRIVATE LIMITED',
    location: 'Kalyani, Nadia, West Bengal',
    status: 'Running successfully'
  });
});

app.listen(PORT, () => {
  console.log(`DermisClinic server running at http://localhost:${PORT}`);
});