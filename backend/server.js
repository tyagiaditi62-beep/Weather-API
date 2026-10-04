const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "https://tyagiaditi62-beep.github.io"
}));
app.get("/weather", async (req, res) => {

    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            error: "City name is required"
        });
    }

    const apiKey = process.env.API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        res.status(response.status).json(data);

    } catch (error) {

        res.status(500).json({
            error: "Something went wrong"
        });

    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});