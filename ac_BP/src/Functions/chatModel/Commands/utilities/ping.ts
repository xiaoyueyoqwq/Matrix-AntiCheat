import { c } from "../../../../Assets/Util";
import { registerCommand, verifier } from "../../CommandHandler";
import { world } from "@minecraft/server";

registerCommand({
    name: "ping",
    description: "Pong! Let anticheat gives you the current server pings.",
    parent: false,
    maxArgs: 0,
    minArgs: 0,
    require: (player) => verifier(player, c().commands.ping),
    executor: async (player, _args) => {
        const ping = await whatIsThePing();
    },
});

function whatIsThePing (): Promise<number> {
    const currentTime = Date.now();
    return new Promise((pong) => {
        system.run(() => {
            const now = Date.now();
            const pong = Math.abs(now - currentTime - 50);
            pong(ping);
        });
    });
}
