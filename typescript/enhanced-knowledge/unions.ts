//  Union types in Typescript allow you to add more possible data types for your inputs for your outputs.  You can also use this to define a state.

// Remember the previous code example from the previous step? It actually has this field called status with a defined union type containing values "single", "married" and "widowed".

// A unique part of Typescript is that unlike other languages, union types can be a set of objects.


type State = "on" | "off";

const status: State = "off";
console.log(status);

// Although you can use union types to define states, or a set of values grouped together, structuresthat rquire mapping and complexity will make you choose enumarations. 