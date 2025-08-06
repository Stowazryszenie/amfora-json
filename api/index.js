
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxKLoCKYomy7rIFWsYlNVl_k2BjkbG_8R-qTQkSGhb4BBDL8VNlCzFG-mbxdqp7iLdZ/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



