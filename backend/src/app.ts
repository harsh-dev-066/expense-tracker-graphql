import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import mergedTypeDefs from "./typeDefs";
import mergedResolvers from "./resolvers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Create and use the GraphQL handler.
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

server.start();

// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     // rootValue: root,
//   })
// );

// Serve the GraphiQL IDE.
if (process.env.NODE_ENV === "development") {
  app.get("/", (_req, res) => {
    // res.type("html");
    // res.end(ruruHTML({ endpoint: "/graphql" }));
  });
}

export default app;
