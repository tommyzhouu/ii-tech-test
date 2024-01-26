export function generateRandomEmail(): string {
	const domain = 'grr.la';
	const username: string = Array.from({ length: 12 }, () => {
		const characters =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789';
		return characters.charAt(Math.floor(Math.random() * characters.length));
	}).join('');
	return `${username}@${domain}`;
}

export function generateRandomWord(length: number): string {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	let randomWord = '';
	for (let i = 0; i < length; i++) {
		const randomIndex: number = Math.floor(Math.random() * letters.length);
		randomWord += letters.charAt(randomIndex);
	}
	return randomWord;
}