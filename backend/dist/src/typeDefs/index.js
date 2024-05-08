"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
// typeDefs
const user_typeDefs_1 = __importDefault(require("./user.typeDefs"));
const transaction_typeDefs_1 = __importDefault(require("./transaction.typeDefs"));
const mergedTypeDefs = (0, merge_1.mergeTypeDefs)([user_typeDefs_1.default, transaction_typeDefs_1.default]);
exports.default = mergedTypeDefs;
