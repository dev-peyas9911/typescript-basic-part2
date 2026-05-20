interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    realeasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface NormalWatch {
  hearRate: boolean;
  stopWatch: boolean;
}

interface AppleWatch {
  hearRate: boolean;
  stopWatch: boolean;
  isWaterProof: boolean;
}

const poorDeveloper: Developer<NormalWatch, { brand: string; price: number }> =
  {
    name: "Mr. Poor",
    salary: 100,
    device: {
      brand: "Lenovo",
      model: "A23",
      realeasedYear: 2010,
    },
    smartWatch: {
      hearRate: true,
      stopWatch: true,
    },
    bike: {
      brand: "Yamaha",
      price: 620000,
    },
  };

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Poor",
  salary: 100,
  device: {
    brand: "Lenovo",
    model: "A23",
    realeasedYear: 2010,
  },
  smartWatch: {
    hearRate: true,
    stopWatch: true,
    isWaterProof: true,
  },
};
