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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697699271";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_51_02_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMSt2dWNwZ3c4SHZnYWR0YW1DQWY5STNacFRPb2pzR3dXNCtrcWQ3WW9qST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGZaaW5RNHpUZDJDeG1jYVh4T3hBQVwiLFxuICBcInBob25lSWRcIjogXCJmZjQzYjdiMC04ZTA1LTRhOWQtYTUxMi0zYWRiNWQ0OGFkNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTE5LFxuICAgICAgMzQsXG4gICAgICAxMyxcbiAgICAgIDE4NixcbiAgICAgIDExMSxcbiAgICAgIDc4LFxuICAgICAgMjIwLFxuICAgICAgMTk3LFxuICAgICAgMTk5LFxuICAgICAgOTUsXG4gICAgICAzLFxuICAgICAgMTQ0LFxuICAgICAgMTk3LFxuICAgICAgNDcsXG4gICAgICAzNCxcbiAgICAgIDI0OCxcbiAgICAgIDI0NSxcbiAgICAgIDIyMSxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgNTAsXG4gICAgICAyMzksXG4gICAgICAxNTQsXG4gICAgICAxMzIsXG4gICAgICA5NixcbiAgICAgIDIxMixcbiAgICAgIDExMSxcbiAgICAgIDEwMixcbiAgICAgIDIyMSxcbiAgICAgIDMsXG4gICAgICAxODksXG4gICAgICAxODYsXG4gICAgICAxODIsXG4gICAgICA5MCxcbiAgICAgIDEyOCxcbiAgICAgIDIsXG4gICAgICA2OSxcbiAgICAgIDEwNyxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnFjNlpnQ0VPWFJoc3dHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiWUs2ekVVT2V4RWZ2WlQyVGsxcCtPa3I2bjljdkJzWExpKzBwQmlrM0NRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInp0elVYTm1iTFVtUEpVZUsvT0JBbkQ3bmFPS2ppcGswNkRPQVNoeTRTN1NVSEhTYm9vbDZPcHRPZFBjbGR4T05mLzNSOTJ3bkMzSjdEeWQ0T2RVOUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJKVlBaRjd6WTVCd2NiVGdZVXJpVXlxbUpRdkNDQm4vWU5NbER1aDlpdFFIclhsRmRtOXJEVWNya3N3ZXFxN2lLcnNFdnNaQm51T3llbzBWUUZvUkJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njk3Njk5MjcxOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTY1MDA1MDQ4OTE2MzQ6MTZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTc2OTkyNzE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzcwMTA1MDY2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🔥 FEU en poudre",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "🔥 FEU en poudre",


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

