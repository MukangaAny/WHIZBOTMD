const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "254 773 440758";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBtSnB6WS8yRUYvOFZxaXdjS0dqKzQrY1RTVExzc0Y2UFp2TEI5K2UxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakM5blhmanpYNHRpTkpqelg5SE8xdnk4ZEtKdjVXWVJsNHliYWd5d2lCST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TXhlaGNIMFRjaXJ0bzJPN01zZ1hNSkQ5VEU3Zk8ydGdCZkthc1dBWG5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWeStoTzNaUmdxa3BmV3RacXBnV3JndEZpRXMxWWRrY3Aranpxa0JZa3pZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBMGl2RWl2MFNjc1VRV3BGckNiZGJad0Z6cHdKYXhPdlNYWWpmZEFyWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOb1VNN1QycSsrTlBld3E5SEoyWHJBemFiSm42RzhhTkcyWjdDZjFWQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJ3aUtCOTFDcThpS3BWQUNkdHZqcmR5ZHFPNU9UaXZHMTV5SjErSGFVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG5Ia012Y1phSjIyWFRHa3pxbldzbkpsN0txdHdBZzBCeGRoYTZjZEhFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF3TlcxakM2YzhPR0E3eStmeFdKNXUvRkpkRmkzMWg5bVZQc0U2K2tKNzFMZElKQk83alRaeUU1dzFaVmtoemlsZFYwYVJkdjdqNVpQNlRLQUFUeUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IkF3V1BqT011clNKcHBBV0EyNngwSFY3VmZQN3hacU45Q0dVQitGSWh1Zkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzczNDQwNzU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFGNjFGNTlFNTM3ODQ3RDA5QjY3OTM5NjhGMEIxRjc0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgyODI5NjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc3MzQ0MDc1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3REFBNTM0NDNGMjU3OEVDNUU1RkNBQTc1MDI0RTc2NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4MjgyOTY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0NDFhNms4MFFsR2lBVGk2amh3VWtnIiwicGhvbmVJZCI6IjI5Y2UzMDFkLWFkNTItNGM2Mi05NmJhLWM5NjI2ODE3Y2NkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMEdXMUhYVUJqKzNkZTNiTXZDYUphSTFQcDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWpUbG1DQ3R1OWErSmduaW9WQ2VjUXFyaHBzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhLMUYzSE5SIiwibWUiOnsiaWQiOiIyNTQ3NzM0NDA3NTg6OTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lhYTA5OEJFTVRWcTdNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlIvcEhheGl2VmJqL1dlMlZJZERtdThxU1Q1c01Td3NJRDAydVc1RFBZU1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitiUVg5YXhIUnNIWlBwU2tib3hsVlAxRnRPb2tESGFOcUI0eEdtbGhlVFZLckJNUUxYZ3Z0UFhlSC9UWndKK1BPdXQveFRXcnFMcHpLSStQVGVJZURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuRkluaUVZa2tWaTQ0THI5bWVpUHpKd1p2TjRVclcvcXdJSXVHenVzTkpDemxNMHltWFZnZHQvN1NFZmVmVW1ZelBNSUNObllEdGk3VUN5TmtSQ2FDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3MzQ0MDc1ODo5NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVZjZSMnNZcjFXNC8xbnRsU0hRNXJ2S2trK2JERXNMQ0E5TnJsdVF6MkVrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MjgyOTYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFUcCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 DELBOY ANIEY-𝛭𝐷",
  author: process.env.PACK_AUTHER || "DELBOYBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DELBOY-MD",
  ownername: process.env.OWNER_NAME || "DELBOY ANIEY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
