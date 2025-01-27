// IN TS interfaces are used to define the structure of objects, specifying the shape and types of their properties and methods.
interface Name {
	firstName: string,
	lastName: string,
	middlename: string | undefined 
}

interface Person extends Name {
	status: "single" | "married" | "widowed",
	address: string,
	parents: [Person, Person] | undefined
}


// Much like class objects, you can use the extends keyword to extend and reuse a definition of an interface.

// For example, let's say you want to have other details by extending the Name interface such as parents, status, and address.

interface Person extends Name {
	status: "single" | "married" | "widowed",
	address: string,
	parents: [Person, Person] | undefined
}

// Declaring a variable using the Person interface 
const person: Person = {
    status: "single",
    address: "",
    parents: undefined,
    middlename: undefined,
    firstName: "",
    lastName: ""
}