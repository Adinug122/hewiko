import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      {
        model: "gemini-1.5-flash", 
        messages: messages,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const message = response.data.choices?.[0]?.message;

    if (!message) {
      return res.status(500).json({ error: "No response from model" });
    }

    res.json(message); 

  } catch (error) {
    console.error("Gemini error:", error.response?.data || error.message);

    res.status(500).json({
      error: "Something went wrong",
      detail: error.response?.data?.error?.message || error.message,
    });
  }
});

export default router;