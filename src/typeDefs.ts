import { gql } from "apollo-server";

export const typeDefs = gql`
  type Student {
    id: ID!
    studentId: Int!
    firstname: String
    lastname: String
    age: Int
    subjects: [Subject]!
  }

  type Subject {
    id: ID!
    name: String!
    credit: Float
  }

  type Query {
    getStudentById(studentId: Int!): Student
  }
`;
