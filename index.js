export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhzY7cBbZo7Dt-52mYhmnYPuVXnKc-etRT8Gx_rToKJSdmxFulvyLJler7gdbdA9FyVdxnQXwWmuySMnn_QAAzs2cUpztWzNnsqU8FGO858niFGLaydfZHlqTb8bdI7zx3_ugdgk9ND48byCo9skixCKy7u_ag4lwGDaWZYHZazIE0z18d2QjqzxOklI2HC9xWzhEtjJ_ElGjNmVIB0mc8Fgdkmc7RsK7lI7A-8N_zKRJHcF6zbid44HxuMi0ywjpT2eQG12n4XISUNGuncGobxXRYkac6KtKFf9rEZ&lib=M6sP22JR8qgw91ijPWtKGKOwJNbmZDE2D'
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
