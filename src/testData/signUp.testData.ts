import { generateRandomWord, generateRandomEmail } from '../helpers/dataHelper';

export type testUser = {
	//name: string;
	email: string;
	firstName: string;
	lastName: string;
	address: string;
	state: string;
	city: string;
	zipCode: string;
	mobileNumber: string;
};

export async function newUserSignUp(): Promise<testUser> {
	return {
		firstName: generateRandomWord(5),
		email: generateRandomEmail(),
		lastName: generateRandomWord(7),
		address: '15' + generateRandomWord(5) + 'Street',
		state: generateRandomWord(6),
		city: generateRandomWord(7),
		zipCode: '123123',
		mobileNumber: '123456789'
	};
}