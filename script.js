const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    const { data } = req.body;

    //validate input
    if (!data || typeof data !== "string") {
        return res.status(400).json({ error: "Invalid input" });
    }

    //convert string into array of characters
    const charArray = data.split("");

    //sort alphabetically
    const sortedChar = charArray.sort();

    //return results
    res.json({
        word: sortedChar
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});