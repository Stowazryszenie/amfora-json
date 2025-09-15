
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxDOxCgUwdhX_gYiTmMEWrKsXQQ3zoRCowUKWtH47JWnQyzO1Fy5yrVfjel3ucK-g2p/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



