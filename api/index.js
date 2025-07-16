// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbwVAlelJAxYj1pfjs-DxUKOc-UT_iXTjjZ-uIUzCVma-cHxmpm25A_sP-q1Dq--CterGA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}
