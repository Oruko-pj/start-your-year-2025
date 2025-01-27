//  in TS types is used to define custom types- which can be used for creating more specific and reusable type definitions.

type Meter = number;
type UserInput = string;
type Maybe = boolean;


//  they are best used to define user inputs such as loggin in and registering.  The following custom types are used to define what could be the user input for logging in.

// type LoginInput = {
//     email: string,
//     username: string,
//     id: number
// }

// TS also supports Unions -it allows you to define a type that ccan be one of several types.
// This allows you to define a more dynamic user input e.g. when a user fails to input their email, consider using undefined to denote "empty" input.

// type LoginInput = {
// 	email: string | undefined,
// 	username: string,
// 	id: number
// }


// There is actually a shorthand version for the sometype | undefined where "sometype" can be any type e.g. number, string, or boolean
type LoginInput = {
	email?: string,     //nstead of using string | undefined, the shorthand uses a question mark symbol (?) after the field name to shorten it to
	username: string,
	id: number
}