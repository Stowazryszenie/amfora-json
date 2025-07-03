// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxO5YQ1-Lft_XSFWIR6f2CCxQUY-BvUGKGdAtT469LcUjIC2S1YlySBvi1R5f-XnWdChA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}
