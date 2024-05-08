import { mergeResolvers } from "@graphql-tools/merge";
// Resolvers
import userResolvers from "./user.resolver";
import transactionResolver from "./transaction.resolver";

const mergedResolvers = mergeResolvers([userResolvers, transactionResolver]);

export default mergedResolvers;
