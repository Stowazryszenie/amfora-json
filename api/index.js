
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbyuluEC85wy-Trwo0MVJ11Opq1S7Yzq2MRiXJ-bWYMTUA3nDsgMY-SJ5iRdvELxag46/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



