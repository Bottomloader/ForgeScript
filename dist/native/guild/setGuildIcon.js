"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildIcon",
    version: "1.0.0",
    description: "Sets a guild icon, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerIcon"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
            description: "The guild to set icon on",
        },
        {
            name: "url",
            description: "The new icon",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, icon, reason]) {
        return this.success((await guild.setIcon(icon || null, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildIcon.js.map