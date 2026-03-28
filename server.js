const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/bills', (req, res) => {
  const bill = req.body;
  console.log('New Bill Generated:', bill.billNumber, '| Patient:', bill.patientName, '| Total: ₹' + bill.total);
  res.json({ success: true, message: 'Bill saved!', bill });
});

app.listen(PORT, () => {
  console.log(`DermisClinic server running at http://localhost:${PORT}`);
});