let anything: any;
anything = "Peyas";
(anything as string).at(0);

const kgToGmConverter = (input: number | string) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `The output is ${Number(value) * 1000}`;
  }
};

console.log((kgToGmConverter(5) as number));
console.log((kgToGmConverter("2 kg") as string));
