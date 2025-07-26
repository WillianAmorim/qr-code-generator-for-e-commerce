import permittedCharacters from './utils/permitedCharacters.js';

async function handle() {
    let characters = []
    let password = ''

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index]
    }

    console.log(password, 'password')
    console.log("ENV:", process.env.UPPERCASE_LETTERS, process.env.LOWERCASE_LETTERS, process.env.NUMBERS, process.env.SPECIAL_CHARACTERS, process.env.PASSWORD_LENGTH);
    console.log("characters:", characters);

    return password;

}

export default handle;