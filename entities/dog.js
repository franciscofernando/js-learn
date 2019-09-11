"use strict";

class Dog {
	constructor({ name, age }) {
		this.name = name;
		this.age = age;
		this.chip_id = Number(new Date());
	}
}

module.exports = Dog;