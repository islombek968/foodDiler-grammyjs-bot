import { Keyboard } from "grammy";
const foodTypeKey = new Keyboard()
  .text("Yeguliklar")
  .text("Ichimliklar")
  .row()
  .text("Asosiy bo'limga")
  .text("Desertlar")
  .resized();
export = foodTypeKey;
