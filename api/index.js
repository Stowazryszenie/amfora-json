// api/index.js

export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbwbxj3Fnr-z6jFXhvGugjRGIdUGpit6tojvX7DJz5foXhdcNsihrkkXgH24Bs4uFW4NZA/exec');
  
  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from Google Apps Script' });
  }

  const data = await response.json();
  res.status(200).json(data);
}


https://script.google.com/macros/s/AKfycbwlHMeGkegvDnC0n4puWJbvrXqh8x3MH4KOAzJytNemzcAmN7FmPFMeFJ6dTgHBu9ZgtA/exec
