"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockData_1 = require("../mockData");
const transactionResolver = {
    Query: {
        transactions: () => {
            return mockData_1.TRANSACTIONS;
        },
    },
    Mutation: {},
};
exports.default = transactionResolver;
