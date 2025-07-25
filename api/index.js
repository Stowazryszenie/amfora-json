
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzqS8UA5C7pjX_dwLZcUF6WEgXuXcARKA2_MHazDKPLRfvRW5GfeO5pcBKnb3WbUiWJYA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



