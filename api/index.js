
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzwrNG9q2QfhugiIVPXlHXmc20Mn_rKLf1wCnPFmQ8pe6QgvsJqukoQ8-tzMOqq9qpQ/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



