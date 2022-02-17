const { buildSchema } = require("graphql");

const schema = buildSchema(`
type User {
    id: ID
    name: String
    email: String
    age: Int
    activated: Boolean
    avatar: String
}
type Post {
    id: ID
    title: String
    content:String
}

input UserInput {
    id: ID
    name: String!
    email: String!
    age: Int
    activated: Boolean!
    avatar: String
}

input PostInput {
    id: ID
    title: String!
    content:String!
}

type Query {
    getAllUsers: [User]
    getUser(id: ID): User
    getActiveUsers: [User]
}

type Mutation {
    createUser(input: UserInput): User
    updateUser(uid: ID!, input: UserInput): User
}


`);

module.exports = schema;
