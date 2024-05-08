import { TRANSACTIONS } from "../mockData";

const transactionResolver = {
  Query: {
    transactions: () => {
      return TRANSACTIONS;
    },
  },
  Mutation: {},
};

export default transactionResolver;
