import clsx from "clsx";
import { Session } from "next-auth";

interface ChatProps {
  name?: string | null;
  email?: string | null;
  message: string;
  timestamp: Date;
  img?: string | null;
  session?: Session | null;
}

function Chat({ name, email, message, timestamp, img, session }: ChatProps) {
  if (!name || !img) return null;

  return (
    <div>
      <div
        className={clsx([
          "flex flex-col",
          session?.user?.email === email && "items-end",
        ])}>
        <span className='px-2 text-xs text-gray-500'>{name}</span>
        <div
          className={clsx([
            "p-2 px-4 max-w-fit text-white shadow-md rounded-full",
            session?.user?.email === email ? "bg-blue-500" : "bg-orange-500",
          ])}>
          <span>{message}</span>
        </div>
        <span className='px-2 text-xs text-gray-500'>
          {timestamp.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default Chat;
