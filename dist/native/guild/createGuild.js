"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createGuild",
    version: "1.5.0",
    description: "Creates a new guild, returns guild id",
    aliases: [
        "$createServer"
    ],
    unwrap: true,
    brackets: true,
    deprecated: true,
    args: [
        {
            name: "name",
            description: "The name for the guild",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "icon",
            description: "The icon for the guild",
            rest: false,
            type: structures_1.ArgType.URL,
        },
    ],
    output: structures_1.ArgType.Guild,
    async execute(ctx, [name, icon]) {
        const guild = await ctx.client.guilds.create({ name: name, icon: icon }).catch(ctx.noop);
        return this.success(guild?.id);
    },
});
//# sourceMappingURL=createGuild.js.map