
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbyO33UBYxh2qs3ZNySBj4vE50sQpd0xYsS75bCtOiMMt4VZrEAscFZYtCC3hjq45RHt/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



