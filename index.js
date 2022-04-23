const config = require("./config.json");
const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

client.on("ready", async () => {
    console.log(`Connected to: ${client.user.username}#${client.user.discriminator}`);
    await client.setActivity(config.rpc);
    console.log("Custom RPC is active.");
})

client.login({ clientId: config.clientID });