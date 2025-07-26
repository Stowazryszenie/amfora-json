
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzqnzvAPMacK7dshUFJt1Ifb7BT8juWV0uDtQZKi0E7o6V-Jq1gTKjk-_LZNfLm6g1_Xg/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



