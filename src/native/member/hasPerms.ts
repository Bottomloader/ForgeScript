import { PermissionFlagsBits, PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hasPerms",
    version: "1.0.0",
    description: "Returns whether given member has X perms",
    unwrap: true,
    aliases: [
        "$memberHasPerms"
    ],
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check for perms",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "perms",
            description: "The perms to check for",
            rest: true,
            type: ArgType.Enum,
            enum: PermissionFlagsBits,
            required: true,
        },
    ],
    execute(ctx, [, member, perms]) {
        return this.success(member.permissions.has(perms))
    },
})