
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbx_QYEYuwo1WjpI40eDU34Ei8kjV7-vPIKlLqf2aaGRDEg5Lobuc3lHc5RAiyu-7HSr/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



