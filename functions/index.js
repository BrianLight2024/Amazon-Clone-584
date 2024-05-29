const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
const Stripe = require("stripe");

// Load environment variables from .env file
dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const app = express();

setGlobalOptions({ maxInstances: 10 });
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({
      message: "Total must be greater than 0.",
    });
  }
});

exports.api = onRequest(app);
