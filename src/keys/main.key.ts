import { Keyboard } from "grammy";
const mainKey = new Keyboard()
  .text("Menyu")
  .row()
  .text("Buyurtmalarim")
  .row()
  .text("Sozlamalar")
  .resized();
export = mainKey;
