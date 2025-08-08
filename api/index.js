
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxGXY4n2uUVpF0CAk8fFtLmt_DO_k_NzrWO2eG1GagkKyRJBoSB3WWMw3-qW90Svoc0/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



