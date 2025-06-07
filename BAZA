const fetch = require("node-fetch");

module.exports = async (req, res) => {
try {
const sheetUrl = "https://script.google.com/macros/s/AKfycbxBM-_29h79M73mZ0s9cYap4_o1_jGIPC3XFRw3r3DHfjkbzr53n43O2eNugRdKXd5o/exec";
const response = await fetch(sheetUrl);
const data = await response.json();

res.setHeader("Content-Type", "application/json");
res.status(200).json(data);
} catch (error) {
res.status(500).json({ error: "Błąd połączenia z Apps Script" });
}
};
