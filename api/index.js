
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbw-tif3CeKIINBuZsptvsBeAPC0u_N_L7J9QKd5vFtkSSry0yEpwcy9hno3EABDyRg/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



