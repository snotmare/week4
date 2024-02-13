import { Customer } from './customer';
import { Employee } from './employee';
import { User } from './user';

let employee = new Employee('Ben', new Date(), '1234');
let customer = new Customer('Bob', new Date(), 'A123');

log(employee);
log(customer);


function log(user: User) {
	//Option 1
	// if(user.constructor.name === 'Employee') {
	// 	console.log(`Employee ${user.name}`);
	// } else {
	// 	console.log(`Customer ${user.name}`);
	// }

	//Option 2
	// if('employeeCode' in user) {
	// 	console.log(`Employee ${user.name}`);
	// } else {
	// 	console.log(`Customer ${user.name}`);
	// }

	//Option 3
	// if(user instanceof Employee) {
	// 	console.log(`Employee ${user.name}`);
	// } else {
	// 	console.log(`Customer ${user.name}`);
	// }

	//Option 4
	console.log(`${user.getType()} ${user.name}`);
}

// function logEmployee(customer: Customer) {
// 	console.log(`Employee ${customer.name}`);
// }

// function logCustomer(customer: Customer) {
// 	console.log(`Customer ${customer.name}`);
// }