class Animal {
	public name: string;

	constructor(name: string | undefined) {
		if (!name) {
			this.name = "Unknown- ogwang' Kiche"
		} else {
			this.name = name
		}
	}
}

const newAnimal = new Animal(undefined);
console.log(newAnimal);



//  iNheritance is still similar 
class Mammal extends Animal {
public genus: string;
public species: string;
public classification: string;
constructor(name: string, genus: string | undefined, species: string | undefined) {
  super(name);
  if (genus === undefined || species === undefined) {
    throw new Error("No species added.", { cause: "Invalid input." });
  } else {
    this.genus = genus;
    this.species = species;
  }
  this.classification = "Mammalia";
}
getSpecies() {
  console.log(`${this.genus} ${this.species}`);
}
}


class Reptile extends Animal {
	private genus: string;
	public species: string;
	public classification: string;
	constructor(name: string, genus: string | undefined, species: string | undefined) {
	  super(name);
	  if (genus === undefined || species === undefined) {
		throw new Error("No species added.", { cause: "Invalid input." });
	  } else {
		this.genus = genus;
		this.species = species;
	  }
	  this.classification = "Reptilia";
	}
	getSpecies() {
	  console.log(`${this.genus} ${this.species}`);
	}
  }
  
  const crocodile = new Reptile("Angel", "Crocodylus", "novaeguineae");
//   console.log(crocodile.genus); // this will error. experiment by removing this line.
  crocodile.getSpecies();






// the differences between Javascript and Typescript is that Typescript forces discipline into developers as they should always be explicit of how data is structured in their code rather than letting a language with a confusing and weak type system do its job.