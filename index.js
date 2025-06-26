export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgW_pS0A9cWkmLgTBybcdLpB6XElHwcmptKb8tdDKonul2pJJ5sJD81w_lORufT1L7wWeqjwLGTGm8jpZM_yWgk6tI8qWeSLNSvvo76eb79ERQs3-WbEJGjN0FWDrb-cpMG9V8aQPVA3MlNQ1hQV5pQm7rJg0HpCVllUDh7N6ZqyudOwSPM9eqqItdDjgsrMFtZopNh3IsNXqtky9RA5g9dTRkMUDWCqwJwkh4TUr_pfkqQlCZlUUxJSkVGUY8ouWzkbZJMuBtECJ2tSgHc6_6EWpGI4barS1C2GTKV&lib=M6sP22JR8qgw91ijPWtKGKOwJNbmZDE2D'
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
