const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '')faltrue37697699271";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_55_02_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSnd5bytkMDdqSGFIcWZVOVVLQzdkb0ZQSWxCQm9vMFFlOHJpSzkyU1ZWOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNm1mNDZRemNSbEM4VTlGSUl1MGhMQVwiLFxuICBcInBob25lSWRcIjogXCIzMTIzYmMxZC00YmEyLTQ2OTMtOTQ4Mi05NDUyMzA5NmUxNDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMzAsXG4gICAgICAyMCxcbiAgICAgIDE5LFxuICAgICAgMzQsXG4gICAgICA3NCxcbiAgICAgIDIwMCxcbiAgICAgIDYyLFxuICAgICAgMjAwLFxuICAgICAgMCxcbiAgICAgIDEyMSxcbiAgICAgIDY3LFxuICAgICAgNjEsXG4gICAgICA0MCxcbiAgICAgIDI0OSxcbiAgICAgIDEzLFxuICAgICAgNjcsXG4gICAgICAyMTIsXG4gICAgICAyMzUsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjQsXG4gICAgICA0MSxcbiAgICAgIDE0NCxcbiAgICAgIDE3MCxcbiAgICAgIDIxMyxcbiAgICAgIDExLFxuICAgICAgODEsXG4gICAgICAwLFxuICAgICAgMjA5LFxuICAgICAgMTA0LFxuICAgICAgNDcsXG4gICAgICAwLFxuICAgICAgMjYsXG4gICAgICA5NixcbiAgICAgIDE3MCxcbiAgICAgIDM3LFxuICAgICAgMTA5LFxuICAgICAgMTA3LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmljNlpnQ0VKRGkvTXNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiWUs2ekVVT2V4RWZ2WlQyVGsxcCtPa3I2bjljdkJzWExpKzBwQmlrM0NRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjUzWnE5ajA4bkE2bXNCeXVXTnBud21pTXlheHp6K0R3a0xXVjY0MXV3OEVCU2psNUR1Si9GZFNyNGt6SXpZWGQ3UlAyTk5GdkVtTEswclpzNnFTQ0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBkWVV1WVJ3dDRSMFIwRHk2UFJ5cHczZVhXd050SzY5dENIaFZVNTZlVnNVYVhrd0RIZCttRzBmQzE1Mm5LQVYzaU1yYjlzcUhqYU1PR0xWYlYxR2d3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njk3Njk5MjcxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTY1MDA1MDQ4OTE2MzQ6MTFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTc2OTkyNzE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzY5OTQzMzE3XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "+", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🔥 FEU en poudre",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "🔥 FEU en poudre 🔥",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

