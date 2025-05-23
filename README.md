# GraphQL CRUD API with Node.js, TypeScript, Prisma, and SQLite

This is a simple GraphQL CRUD API built with:

- **Node.js**
- **TypeScript**
- **Apollo Server**
- **Prisma ORM**
- **SQLite** (local file-based database)

## 🚀 Features

- GraphQL API for creating, reading, updating, and deleting posts.
- Prisma ORM for type-safe DB operations.
- SQLite for lightweight, file-based storage.
- TypeScript for static typing and maintainability.

---

## 📁 Project Structure

```
project-root/
├── prisma/
│   └── schema.prisma         # Prisma data model
├── src/
│   ├── generated/            # (Optional) Custom Prisma client output
│   ├── context.ts            # Prisma context for resolvers
│   ├── resolvers/            # GraphQL resolvers
│   ├── typeDefs/             # GraphQL schema definitions
│   └── index.ts              # Entry point
├── .env                      # Environment variables (e.g. DB URL)
├── package.json              # Scripts and dependencies
└── tsconfig.json             # TypeScript config
```

---

## 🛠️ Setup Instructions


### 0. 🔧 Initialize Prisma (if not already done)

```bash
npx prisma init --datasource-provider sqlite
```

> This creates a `prisma/schema.prisma` and `.env` file.

### 1. 📦 Install dependencies

```bash
npm install
```

### 2. 🧪 Set up environment variables

Create a `.env` file in the root:

```env
DATABASE_URL="file:./dev.db"
```

### 3. 🧬 Generate Prisma client

```bash
npx prisma generate
```

> This compiles the Prisma client into `node_modules/@prisma/client` or a custom location if configured.

---

### 4. 🗃️ Create and migrate the database

Run this to create the SQLite DB and apply schema:

```bash
npx prisma migrate dev --name init
```

This will also regenerate the Prisma client.

---

### 5. 🚀 Start the development server

```bash
npm run dev
```

> Make sure you have this in `package.json`:
> ```json
> "scripts": {
>   "dev": "ts-node-dev --respawn src/index.ts"
> }
> ```

---

## 🔍 Available GraphQL Queries & Mutations

After starting the server, visit:

```
http://localhost:4000/
```

You can use the Apollo Sandbox to run queries like:

```graphql
# Create a post
mutation {
  createPost(title: "Hello World", content: "This is my first post") {
    id
    title
    published
  }
}

# Get all posts
query {
  posts {
    id
    title
    content
    published
  }
}
```

---

## 🧼 Clean and Build

```bash
npm run build   # Transpile TypeScript
```

---

## 🧱 Tech Stack

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)

---

## 📄 License

MIT – feel free to use or modify!

---

## 🤝 Contributing

Pull requests and issues are welcome. Let’s make this better together 🚀
