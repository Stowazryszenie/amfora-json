
// api/index.js

export default async function handler(req, res) {
  const uid = req.query.uid || "";
  
  // 🔗 Twój właściwy adres Google Apps Script
  const baseUrl = 'https://script.google.com/macros/s/AKfycby9cJQMnfBsVDK4aykBMDVzcOclvVtFItR1JMcKRUXOaNhuIlIpUcDqjpsJDPpM1ooa-A/exec';
  const finalUrl = uid ? `${baseUrl}?uid=${uid}` : baseUrl;

  try {
    const response = await fetch(finalUrl);

    if (!response.ok) {
      return res.status(500).json({ error: '❌ Nie udało się pobrać danych z Google Apps Script.' });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: '❌ Wystąpił błąd po stronie serwera proxy.', szczegóły: error.message });
  }
}
