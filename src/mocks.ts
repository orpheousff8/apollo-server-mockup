import { MockList } from "apollo-server";
import casual from "casual";

const subjectLists = [
  "Maths",
  "Physics",
  "Chemistry",
  "Biology",
  "PE",
  "History",
  "English",
];

export const mocks = {
  Int: () => 55,
  Float: () => 55.55,
  String: () => "Lorem Ipsum",

  Student: () => ({
    studentId: casual.integer(1000, 2000),
    firstname: casual.first_name,
    lastname: casual.last_name,
    age: casual.integer(12, 18),
    subjects: () => new MockList([0, 4]),
  }),
  Subject: () => ({
    name: subjectLists[casual.integer(0, subjectLists.length - 1)],
    credit: casual.double(1.0, 3.0).toFixed(2),
  }),

  Query: () => ({
    getStudentById: (parent, { studentId }) => ({
      studentId: studentId,
    }),
  }),
};
