const https = require('https');

module.exports = (req, res) => {
  const scriptUrl = 'const response = await fetch(
  ''https://script.google.com/macros/s/AKfycbxqP-uoAdN-nPxPKxVGodq25KuTMlwxZRwbE9m8V7pJ9jrw734it7eJ7s8o20lOQn-9Jg/exec'
'
);
';

  https.get(scriptUrl, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(data);
    });

  }).on('error', (err) => {
    console.error('Błąd połączenia z Google Apps Script:', err);
    res.status(500).send({ error: 'Błąd połączenia z Google Apps Script' });
  });
};
