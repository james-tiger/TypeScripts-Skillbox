interface Car {
    dynamic_1: Record<string, number>;
    dynamic_2: { [key: string]: string };
    tuple: [string, number];
  }
  
  // Log keys of the Car interface
  const carKeys: (keyof Car)[] = Object.keys({} as Car);
  console.log("Keys of Car interface:", carKeys);
  
  // Function overloading
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }
  
  console.log("add(1, 2):", add(1, 2)); // Output: 3
  console.log('add("Hello, ", "World!"):', add("Hello, ", "World!")); // Output: Hello, World!
  
  // Utility types
  type PartialCar = Partial<Car>;
  type ReadonlyCar = Readonly<Car>;
  type PickCar = Pick<Car, 'dynamic_1' | 'tuple'>;
  type OmitCar = Omit<Car, 'dynamic_2'>;
  type RequiredCar = Required<Car>;
  
  // Log examples of utility types
  const partialCar: PartialCar = { dynamic_1: { key: 123 } };
  console.log("PartialCar example:", partialCar);
  
  const readonlyCar: ReadonlyCar = { dynamic_1: { key: 123 }, dynamic_2: { key: "value" }, tuple: ["abc", 123] };
  console.log("ReadonlyCar example:", readonlyCar);