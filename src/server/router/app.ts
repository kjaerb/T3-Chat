// src/server/router/index.ts
import { createRouter } from "../context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { messageRouter } from "./message.router";
import { TRPCError } from "@trpc/server";

export const appRouter = createRouter()
  .query("getSession", {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next();
  })
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("messages.", messageRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
