import { useSession } from "next-auth/react";
import { useState } from "react";
import { useCreateMessage, useGetMessages } from "../../hooks/useMessages";
import Chat from "./Chat";

function ChatRoom() {
  const { createMessage } = useCreateMessage();
  const { messages, status } = useGetMessages();

  const [message, setMessage] = useState("");

  const { data: session } = useSession();

  return (
    <div className='w-full h-full'>
      <div>
        {messages?.map((message) => {
          return (
            <Chat
              key={message.id}
              name={message.user.name}
              message={message.message}
              timestamp={message.createdAt}
              img={message.user.image}
              session={session}
              email={message.user.email}
            />
          );
        })}
      </div>
      <div>
        <form
          className='flex'
          onSubmit={(e) => {
            e.preventDefault();
            createMessage({ message: message });
            setMessage("");
          }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='px-4 py-4 border shadow-sm w-full'
            placeholder="What's on your mind?"
            type='text'
          />
          <button
            disabled={status != "success"}
            className='px-6 py-4 bg-blue-500 text-white'
            type='submit'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
