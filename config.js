const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  |SUHAIL_09_38_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclJ2NU4weWhXbnNRNklwOWRIOFFDL1Y2VVpTR1IvcS9IeElNcW9LNW84az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaEN1SXRXbllRT1dqLWwxSlZ2a0l2Z1wiLFxuICBcInBob25lSWRcIjogXCJjZWY2NjEwZC04YjcyLTQ5YjMtYWYzZS02NWYxMjU1Mzk5YzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAyMzYsXG4gICAgICAxNjEsXG4gICAgICAxNDksXG4gICAgICAxMDAsXG4gICAgICAyMCxcbiAgICAgIDU5LFxuICAgICAgMTAwLFxuICAgICAgMTkwLFxuICAgICAgMjA4LFxuICAgICAgMTU0LFxuICAgICAgMTQ4LFxuICAgICAgMjM2LFxuICAgICAgNixcbiAgICAgIDI1LFxuICAgICAgODcsXG4gICAgICAxNDAsXG4gICAgICAxMzgsXG4gICAgICAyNTEsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAxMDgsXG4gICAgICA1OSxcbiAgICAgIDExOSxcbiAgICAgIDEzNSxcbiAgICAgIDE4MSxcbiAgICAgIDE3OCxcbiAgICAgIDEyMSxcbiAgICAgIDE5OCxcbiAgICAgIDcxLFxuICAgICAgMTk5LFxuICAgICAgMjUxLFxuICAgICAgMTIxLFxuICAgICAgMTU1LFxuICAgICAgNDksXG4gICAgICAyMTQsXG4gICAgICAyMzEsXG4gICAgICA5MSxcbiAgICAgIDI1MCxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0yQ0tZMzlYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDczODY5MDM2NzU6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0NTA0OTU0NDU0MTU4OjcyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x1Umt2TUVFS09zb3JrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWEo0Z2lKS0F4T0FnNTZTQ2lxbHJEWUxZV3hoT0NtYjhSNVF3akgzb1NqST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5ajZRMitXeXVQVG4xZ0M4c3U3Q0EySVg0Sy9CYUp2b1c0QTZValcrR3g4RnlwdHNjQUFKWERhbXdCVk9ibVpKY0xqaTlsQjVia0c1Z0NuUDBhZFZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxbTNlakVIME5XNHlJVnIwS25SSVRiQzhibU0wY3VCT2hSVnBhcW9pZStIdmlBbWpRQnZxbmJOYVJOTUpuUml6bDRlM05FQjlFMDVEWmhCdytnbU9qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDczODY5MDM2NzU6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3MTMxMjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQ3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxDcy5qc29uIjogIntcImtleURhdGFcIjpcIjJwMHJ5L0o1aXM5cTNDTlpVSW9RQno2RmtMa2VIVWdMeHZNR1JYWXNNSkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxNTIxMTQ0NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9| ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
