const express = require("express");
const { Telegraf } = require("telegraf");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const bot = new Telegraf("7290637755:AAGvGnOKGQBANL3HWvZqK7_4Fp7vhWZAMDs");

app.use(cors());
app.use(bodyParser.json());

bot.start((ctx) => ctx.reply("Welcome! Send me your chat ID."));
bot.on("message", (ctx) => {
  const chatId = ctx.chat.id;
  if (chatId % 2 === 0) {
    ctx.reply("Your chat ID is even, showing full page.");
  } else {
    ctx.reply("Your chat ID is odd, showing partial page.");
  }
});

bot.launch();

app.get("/api/message", (req, res) => {
  res.send({ message: "API is working" });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
