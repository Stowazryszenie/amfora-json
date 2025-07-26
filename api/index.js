
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbwbbBx6dECdq1TLhzHFSQ4C9O8hGoC92P4l6guB82L5zI8K5OKHbcgS1N24N1GFbN-VoA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



