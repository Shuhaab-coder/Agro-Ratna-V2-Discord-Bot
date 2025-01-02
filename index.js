const { Client, GatewayIntentBits, Events } = require("discord.js");
const express = require('express');
const keepAliveApp = require('./keep_alive.js'); // Requires the keep_alive app
const axios = require('axios'); // Required for API requests
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}!`);
});

client.on(Events.MessageCreate, (message) => {
  // Ignore bot messages
  if (message.author.bot) return;
  if (message.content === "@V2 !ping") {
    message.reply(`Pong! Latency is ${client.ws.ping}ms.`);
  }
  if (message.content === "@V2 Who Is Agro Ratna V2?") {
    message.reply(`
        **Agro Ratna**

Agro Ratna is a project or initiative aimed at revolutionizing agricultural practices, empowering farmers, or providing innovative solutions in the agricultural domain.

---

__**Key Features (Hypothetical)**__
- 🌾 **Smart Farming Solutions**: Integration of modern technologies like IoT and AI for efficient farming.
- 📊 **Data-Driven Insights**: Tools to analyze crop health, weather patterns, and soil quality.
- 📈 **Market Support**: Direct-to-market platforms to help farmers sell their produce at better prices.
- 🌱 **Sustainability Focus**: Eco-friendly practices for long-term agricultural growth.
- 🤝 **Community Engagement**: Support networks and knowledge-sharing among farmers.

---

__**Possible Objectives**__
1. Enhance agricultural productivity and efficiency.
2. Reduce environmental impact through sustainable practices.
3. Empower farmers with cutting-edge tools and resources.
4. Build a resilient and adaptive agricultural ecosystem.

---
        `);
  }
  if (message.content === "@V2 What Are The Features?") {
    message.reply(`
        **Agro Ratna**

Agro Ratna is an innovative project aimed at modernizing agricultural practices through automation and smart technologies. It includes several key farming features such as **Ploughing**, **Seed Sowing Mechanism**, **Soil Moisture Monitoring**, **Grass Cutter**, **Stone Remover**, **Animal Recognition**, and **NPK Sensor for Soil Analysis**.

---

__**Features and Demonstrations**__

🌾 **Ploughing**  
Our Ploughing Mechanism ploughs the field efficiently when commanded.  
- **How it works**: It consists of a Servo Motor connected to an Arduino Uno for precise control.  

🌱 **Seed Sowing Mechanism**  
Automatically sows seeds in the field as needed.  
- **How it works**: Powered by a Servo Motor and a creative Bottle System designed by the team.  

💧 **Soil Moisture Monitoring**  
Ensures water is provided to the field only when necessary.  
- **How it works**: Utilizes a Soil Moisture Sensor, Arduino Nano, and a Breadboard for water flow control.  

✂️ **Grass Cutter**  
Cuts the grass in the field when required.  
- **How it works**: Controlled by a DC Motor and Arduino Nano for smooth operation.  

🪨 **Stone Remover**  
Removes stones from the land to prepare it for farming activities.  
- **How it works**: Operated by a DC Motor for efficient stone removal.

🐾 **Animal Recognition**  
Detects the presence of animals in the field to prevent damage to crops.  
- **How it works**: Uses a camera module with machine learning algorithms to recognize animals and alert the farmer via a connected system.  

🧪 **NPK Sensor for Soil Analysis**  
Measures the levels of Nitrogen (N), Phosphorus (P), and Potassium (K) in the soil to determine its fertility.  
- **How it works**: Incorporates an NPK Sensor with Arduino to provide real-time nutrient data for better decision-making.

---

This comprehensive system enhances agricultural productivity, reduces manual labor, ensures better crop management, and supports sustainable farming practices.


        `);
  }
  if (message.content === "@V2 --v") {
    message.reply(`__Agro Ratna__ [Version 2.0] 
**© Shuhaab**. *All rights reserved.*`);
  }
  if (message.content === "@V2 Tell Me About The V1") {
    message.reply("Well You Should Check Out This Command: `@V2 !Synopsis`");
  }
  if (message.content === "@V2 !Synopsis") {
    message.reply(
      "[This](https://docs.google.com/document/d/1A3_bU19JWNUqeZENUAYnw1JQesdgGcN4thv9_wKrToA/edit?pli=1&tab=t.0) is the link to the Synopsis Of Agro Ratna V1 & V2"
    );
  }
  if (message.content === "@V2 !help") {
    message.reply(`Available Commands are: @V2 Who Is Agro Ratna V2?, @V2 !ping, @V2 !Synopsis, @V2 Tell Me About The V1, @V2 --v, @V2 What Are The Features? & @V2 Who Is Agro Ratna V2?. There are 7 Total Commands.
      `);
  }
  if (message.mentions.users.has(client.user.id) && !message.author.bot) {
    message.reply(
      "Hello, I'm Agro Ratna V2's Discord Bot. to know my commands please use `@V2 !help`"
    );
  }
});

client.login(process.env.TOKEN);
