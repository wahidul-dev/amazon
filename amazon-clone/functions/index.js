const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HqIrTHqqLq1X971UjUzOyOfnNJtl4VGfmx8hpArGWUh7rkoTolh8HVzFbjnLkCZwDCG5jqT5EhHC2iMnMTIgP4800tUgQx7Wm")

//API

// - App config
const app = express();

// - middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received Boom!!! for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-3c25a/us-central1/api