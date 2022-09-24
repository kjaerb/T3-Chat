import { Message, PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import prisma from "../../lib/prisma";

export async function getMessages() {
  return await prisma.message.findMany({
    orderBy: {
      createdAt: "asc",
    },
    include: {
      user: true,
    },
  });
}

interface createMessageProps {
  message: string;
  email: string;
  name: string;
}

export async function createMessage({
  message,
  email,
  name,
}: createMessageProps) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "No user found with that email",
    });
  }

  return await prisma.message.create({
    data: {
      message,
      userId: user.id,
    },
  });
}
