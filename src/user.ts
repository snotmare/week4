export class User {
	name: string;
	birthdate: Date;

	constructor(name: string, birthdate: Date) {
		this.name = name;
		this.birthdate = birthdate;
	}

	greet(value: string) {
		console.log(`${value} ${this.name}`);
	}

	getType(): string {
		return 'User';
	}
}