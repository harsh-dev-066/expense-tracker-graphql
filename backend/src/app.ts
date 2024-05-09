import express from "express";
import cors from "cors";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import mergedTypeDefs from "./typeDefs";
import mergedResolvers from "./resolvers";
import { connectDB } from "./db/connectDB";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors<cors.CorsRequest>());

const httpServer = http.createServer(app);

// Create and use the GraphQL handler.
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startApolloServer() {
  await connectDB();
  await server.start();

  app.use(
    "/",
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    })
  );

  if (process.env.NODE_ENV === "development") {
    app.get("/", (_req, res) => {
      res.send("Working");
    });
  }
}

startApolloServer().catch((error) => {
  console.error("Error starting Apollo Server:", error);
});

export default app;
