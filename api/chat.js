export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gemini-1.5-flash",
          messages,
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    const message = data.choices?.[0]?.message;

    if (!message) {
      return res.status(500).json({ error: "No response from model" });
    }

    return res.status(200).json(message);

  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
      detail: error.message,
    });
  }
}