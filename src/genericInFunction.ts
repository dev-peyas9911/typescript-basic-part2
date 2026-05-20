// const arrayOfStr = (value: string) => {
//   return [value];
// };

// const arrayOfNum = (value: number) => {
//   return [value];
// };

// const arrayOfobject = (value: { id: number; name: string }) => {
//   return [value];
// };

const arrayWithGeneric = <T>(value: T) => {
  return [value];
};

console.log(arrayWithGeneric("Apple"));
console.log(arrayWithGeneric(10));
console.log(arrayWithGeneric({ id: 1, name: "Peyas" }));

const arrayWithTuple = (value1: string, value2: string) => {
  return [value1, value2];
};

const arrayOfTupleGeneric = <X, Y>(value1: X, value2: Y) => {
  return [value1, value2];
};

const result1 = arrayOfTupleGeneric("Hello", true);
console.log(result1);

type Student = { id: number; name: string };

const addToCourse = <T extends Student>(studentInfo: T) => {
  return {
    CourseName: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 1,
  name: "Peyas",
  isMarried: true,
};

const student2 = {
  id: 1,
  name: "Peyas",
  isActive: true,
};

const student3 = {
  id: 4,
  name: "Jhinuk",
  hasWatch: true,
};

console.log(addToCourse(student3));
