import { trpc } from "../utils/trpc";

export function useGetMessages() {
  const { data, status } = trpc.useQuery(["messages.getMessages"]);

  return {
    messages: data?.result,
    status,
  };
}

export function useCreateMessage() {
  const ctx = trpc.useContext();

  const { mutate } = trpc.useMutation(["messages.createMessage"], {
    onSuccess: () => {
      ctx.invalidateQueries(["messages.getMessages"]);
    },
  });

  return {
    createMessage: mutate,
  };
}
