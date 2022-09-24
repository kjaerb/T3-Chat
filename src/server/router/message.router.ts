import { z } from "zod";
import { createMessage, getMessages } from "../controller/message.controller";
import { createRouter } from "../context";
import { TRPCError } from "@trpc/server";

export const messageRouter = createRouter()
  .query("getMessages", {
    async resolve() {
      const result = await getMessages();

      return {
        result,
      };
    },
  })
  .mutation("createMessage", {
    input: z.object({
      message: z.string(),
    }),
    async resolve({ input: { message }, ctx }) {
      const email = ctx.session?.user?.email;
      const name = ctx.session?.user?.name;

      if (!email || !name) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to create a message",
        });
      }

      return await createMessage({ message, email, name });
    },
  });
