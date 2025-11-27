
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxHewlaa1TlB8cEP6urR4O3oZLWnCEC_-S5ENEfICu259XxM_BzWFZuM7i3OGS2bFnq/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



