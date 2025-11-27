
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbwwWqGxHd-hq5mhjJzEKA9H0-DONqGaA9dbZGLiBnSwfB6cypj1xjqC2gcmzsvxQGC7/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



