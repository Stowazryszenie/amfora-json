import fetch from 'node-fetch';

export default async function handler(req, res) {
try {
const sheetUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgEcO66uTUJsHUI81vhAANEaHzdqhqXv0M4nyTtI5XoaUK9-zNEGbR1rqKZmKOPbmliGAwJj-v3pdvPmHyPX9SNuGhaFof3qQLFTl6ARmvqsO3B1Ewt0avHSgsVnCfB84Y3RUEumE6cloYvTdr-ZWF42lf8BnEFFnKW92_C4noYHkeF1VgxlScMPZzMrsEA23Pg9jxmVCI4TnUmyFYGQGw7FxYAsQTJ1k79L_LOWQq2u5DrDGlR5bYWdNQ0K3XK1u6S9FZJExuoEEyIJLr94tsGTY3lfw&lib=MkmsWdo9yhrZ0H8mB4n1y8m5nTJ9QKSJy";
const response = await fetch(sheetUrl);
const data = await response.json();

res.setHeader("Content-Type", "application/json");
res.status(200).json(data);
} catch (error) {
res.status(500).json({ error: "Błąd połączenia z Apps Script" });
}
}
