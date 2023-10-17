import { Bot } from "grammy";
import { foodTypeKey, mainKey, orderKey } from "./keys";

const bot = new Bot("6172978856:AAGQ7UF1erQ6pPnF7qIxLGPORiFoxduKHFU"); // <-- put your bot token between the ""

bot.command("start", (ctx) =>
  ctx.reply("Assalomu alaykum, Biz orqzli buyurtma qilishingiz mumkin", {
    reply_markup: mainKey,
  })
);
bot.on("message", (ctx) => {
  const massage = ctx.message.text;
  if (massage == "Menyu") {
    ctx.reply("Qanday turdagi taom buyurtma qilmoqchisiz", {
      reply_markup: foodTypeKey,
    });
  }
  if (massage == "Buyurtmalarim") {
    ctx.reply("Buyurtma holati bo'yicha tanlang:", {
      reply_markup: orderKey,
    });
  }
});
bot.callbackQuery("first", async (ctx) => {
  await ctx.reply("ddd");
});
bot.start();
