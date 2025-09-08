
// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycby2M6G8JIdKwpNly0VkFAdh0UaUgaYc2SgPss5OLbIK7lLjz6uY_pkdQlq5IpHHKl_c/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}



