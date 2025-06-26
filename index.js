export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxO5YQ1-Lft_XSFWIR6f2CCxQUY-BvUGKGdAtT469LcUjIC2S1YlySBvi1R5f-XnWdChA/exec");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
