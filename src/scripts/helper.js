const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};

function toCapitalize(str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
}

function isLowerCase(str) {
	return str === str.toLowerCase() && str !== str.toUpperCase();
}

export function translateEnglishToPigLatin(english) {
	return english.split(' ').map(word => {
		let firstLetter = word.charAt(0);
		if (vowels[firstLetter.toLowerCase()]) {
			// vowel letter at the beginning of the word
			return word + 'way';
		} else {
			let vowelIndex = 1;
			// consonant letter at the beginning of the word
			for(let i = 1; i < word.length; i++) {
				// detect the first vowel letter and then break the loop
				if (vowels[word.charAt(i).toLowerCase()]) {
					vowelIndex = i;
					break;
				}
			}
			const ending = word.substring(0, vowelIndex).toLowerCase() + 'ay';
			// format the output based on the first letter of the word
			return isLowerCase(firstLetter)
						? word.substring(vowelIndex) + ending
						: toCapitalize(word.substring(vowelIndex) + ending);
		}
	}).join(' ');
}

export function generateRandomString() {
	const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
	const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const charLength = lowerCaseCharacters.length;
	let strArr = [];
	let result;
	for (let i = 0; i < 10; i++) {
		result = upperCaseCharacters[Math.floor(Math.random() * charLength)];
		for(let j = 0; j < 8; j++) {
				result += lowerCaseCharacters.charAt(Math.floor(Math.random() * charLength));
		}
		strArr.push(result);
	}
	return strArr.join(' ');
}
