import { USERS } from "../mockData";

const userResolvers = {
  Query: {
    user: (id: string) => {
      return USERS.find((user) => user._id === id);
    },
  },
  Mutation: {},
};

export default userResolvers;
