import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

import Button from "../ui/Button";

function Auth() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='flex items-center space-x-4'>
        <span className='text-white'>{session?.user?.name}</span> <br />
        <Button variant='primary' onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }
  return (
    <Button variant='primary' onClick={() => signIn("google")}>
      Sign in
    </Button>
  );
}

export default Auth;
