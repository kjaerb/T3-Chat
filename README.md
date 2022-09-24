# T3-Chat

This is an example of a chat application using the T3 framework. The chat has a prisma db for storage messages, and utilizes the next-auth prisma adapter for storing users. Each user and message is stored in the db and fetched on the client side.

## Getting Started
Run the development server:

```bash
npm run dev
```
or
```bash
yarn dev
```
or
```bash
pnpm dev
```

To initialize the db run
```bash
pnpm prisma migrate dev --name init
pnpm prisma generate
```

This will create a db and a prismaclient.

## Next auth
The application uses next auth for authorizing users. There's been added a middleware such that users can only fetch or send messages if they're logged in. The middleware is run on every request.