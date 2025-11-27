
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzUvohgOl2WE_SOFOTlzyYpxip9gQHk-bHX4wMSgdTyhZn8D7gxXV_YwH5pWIflTC3vwQ/exec?action=getusers');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



