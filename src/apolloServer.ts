import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { mocks } from "./mocks";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
    // mockEntireSchema: true,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});