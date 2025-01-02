const express = require("express");
const cron = require("node-cron");

const app = express();

app.get("/", (req, res) => {
  res.send("Bot is awake!");
});

cron.schedule("* * * * *", () => {
  // Make a request to your bot's endpoint to keep it awake
  axios
    .get("https://agro-ratna-v2-discord-bot.onrender.com")
    .then(() => {
      console.log("Pinged bot to keep it awake");
    })
    .catch((error) => {
      console.error("Error pinging bot:", error);
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = app; // Exports the app for use in main file
