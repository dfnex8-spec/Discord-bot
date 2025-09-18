const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const token = process.env.TOKEN; 
const clientId = process.env.CLIENT_ID;

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Botun tepki süresini ölçer!")
].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Slash komutları yükleniyor...");
    await rest.put(Routes.applicationCommands(clientId), { body: commands });
    console.log("Slash komutları yüklendi!");
  } catch (error) {
    console.error(error);
  }
})();

client.on("ready", () => {
  console.log(`${client.user.tag} giriş yaptı!`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

client.login (MTQxNzU1NDQyOTY3ODE5MDc0NQ.GZ0AGa.hwrCUZctKYBRsukYSNgHe7ZLSvbNw-SpADSLZk);
