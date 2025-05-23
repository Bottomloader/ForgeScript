"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invite_1 = require("../../properties/invite");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$oldInvite",
    version: "1.0.3",
    description: "Retrieves old data from an event whose context was an invite instance",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: invite_1.InviteProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(invite_1.InviteProperties[prop](ctx.states?.invite?.old, sep));
    },
});
//# sourceMappingURL=oldInvite.js.map