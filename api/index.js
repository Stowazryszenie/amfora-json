
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbwfO_ehPOn8hUhJqzgAS2Fd-ckJvewu2stqG8NkE_SS2LKuwWVojboAcph53aJ-Egfv/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



