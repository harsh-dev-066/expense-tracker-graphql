"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Create and use the GraphQL handler.
const server = new server_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
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
exports.default = app;
