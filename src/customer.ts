import { User } from './user';

export class Customer extends User {
	customerNumber: string;

	constructor(name: string, birthdate: Date, customerNumber: string) {
		super(name, birthdate);
		this.customerNumber = customerNumber;
	}

	override greet(value: string) {
		super.greet(`Customer: ${value}`);
	}

	override getType(): string {
		return 'Customer';
	}
}