import express from "express";
import { PSP_URL } from "./constants.js";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint for getting data from the front-end
app.get("/api/data", (req, res) => {
  // Simulate fetching data
  const data = {
    message: "Hello from the server!",
    timestamp: new Date(),
  };
  res.json(data);
});

// Endpoint for starting a payment
app.post("/api/payment", async (req, res) => {
  const paymentDetails = req.body;

  // Simulate payment processing
  console.log("Starting payment with details:", paymentDetails);

  try {
    const response = await axios.post(
      `${PSP_URL}/paymentStart`,
      paymentDetails
    );
    res.json({
      status: "Payment started successfully",
      pspResponse: response.data,
    });
  } catch (error) {
    console.error("Error starting payment:", error);
    res.status(500).json({
      status: "Payment failed",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
