
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzPBAniZfNGGqXr4rx15ZXFu-YMiRI7qk-bDW_ZV5e9m4f8vtLrqSCtXG9TlqwUyvAEMA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



