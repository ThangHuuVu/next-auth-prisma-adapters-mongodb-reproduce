# Reproduce repo for [next-auth issue when using Prisma Client generated for MongoDB](https://github.com/nextauthjs/next-auth/issues/4030)

- Install dependencies: `yarn`
- Start the mail server with `npx fake-smtp-server`.
- Generate Prisma client: `npx prisma generate`
- Start the server: `yarn dev`