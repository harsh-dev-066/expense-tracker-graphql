"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockData_1 = require("../mockData");
const userResolvers = {
    Query: {
        user: (id) => {
            return mockData_1.USERS.find((user) => user._id === id);
        },
    },
    Mutation: {},
};
exports.default = userResolvers;
