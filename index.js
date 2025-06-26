export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSkLGw_pS0A9cWkmlgTBybdclLpB6XElHwcmptKb8tdDKonul2pJJsJD81w_lORufT1L7wWejqwLGTGm8jpZM_yWgK6lt8qWeSLNSvo76E49LXz0a7_WM9oU_RVqw_wRPmNB0B6eU3UssH2s7T1UV0VAoNK_qT3b34GrBYC1zKFk2_HF0zKxJg&lib=MqK1VRDjSG5ItD5AVXCHpxH1IgWosfWaZ'
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Błąd pobierania danych z Apps Script:', err);
    res.status(500).json({ error: 'Błąd połączenia z Google Apps Script' });
  }
}
