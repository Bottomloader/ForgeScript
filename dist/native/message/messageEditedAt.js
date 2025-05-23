"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageEditedAt",
    version: "1.5.0",
    output: structures_1.ArgType.Number,
    description: "Returns the edited timestamp of the message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its edited timestamp",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.editedTimestamp);
    },
});
//# sourceMappingURL=messageEditedAt.js.map