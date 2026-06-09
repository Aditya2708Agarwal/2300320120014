const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = process.env.BEARER_TOKEN;

app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "Failed to fetch notifications",
    });
  }
});

app.post("/logs", async (req, res) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "Logging failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});