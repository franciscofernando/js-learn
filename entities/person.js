"use strict";

class Person {
	constructor({ name, age, gender, characteristics }) {
		this.name = name;
		this.age = age;
		this.gender = gender;

		if (characteristics) {
			this.characteristics = characteristics;			
		}
	}
}

module.exports = Person;