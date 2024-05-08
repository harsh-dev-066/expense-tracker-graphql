import { mergeTypeDefs } from "@graphql-tools/merge";
// typeDefs
import userTypeDef from "./user.typeDefs";
import transactionTypeDef from "./transaction.typeDefs";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;
