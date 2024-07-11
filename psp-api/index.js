import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post("/paymentStart", (req, res) => {
  const paymentData = req.body;
  console.log("Payment Start Request Received:", paymentData);
  res
    .status(200)
    .json({ message: "Payment start received", data: paymentData });
});

app.listen(PORT, () => {
  console.log(`PSP app listening on port ${PORT}`);
});
