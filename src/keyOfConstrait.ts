type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user = {
  id: 1,
  name: "Peyas",
  address: {
    city: "Kg",
  },
};

const product = {
    name: 'Levis'
}

const getKeyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

console.log(getKeyFromObj(user, "name"));
console.log(getKeyFromObj(product, "name"))
