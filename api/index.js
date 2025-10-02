
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycby0_DSgzQPUddIwz2nhCSqTvXUqc3G2s2HRw6indHUyRMNjZszH0ULWGoYwrlnMo8J5/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



