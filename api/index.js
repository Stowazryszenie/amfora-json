
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxhH-EyUieKqv9f0q9bNA2mC-RXVUKntmGymlaPrxbknE5tXNMFOrO0bfWC_XLLUiHmEA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



