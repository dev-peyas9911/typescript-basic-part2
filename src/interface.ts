type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUser {
    name: string,
    age: number
}

interface IUserWithRole extends IUser {
    role: "admin" | "user"
}

const user: IUserWithRole = {
  name: "Peyas",
  age: 24,
  role: "admin",
};
