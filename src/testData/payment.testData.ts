import { generateRandomWord } from '../helpers/dataHelper';

export type paymentDetails = {

	NameOnCard: string;
	CardNumber: string;
	CVC: string;
    ExpiryMonth: string;
    ExpiryYear: string;

};

export async function paymentInformation(): Promise<paymentDetails> {
	return {
		NameOnCard: generateRandomWord(5) + ' ' + generateRandomWord(7),
		CardNumber: '1234567891234567',
		CVC: '123',
        ExpiryMonth: '01',
        ExpiryYear: '2025'
	};
}