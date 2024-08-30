const passwordField = document.getElementById('password');
const copybutton = document.getElementById('copy-button');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate-button');

const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

generateButton.addEventListener('click', ()=> {
    const length = lengthInput.value;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    passwordField.value = password;
});

copybutton.addEventListener('click',()=>{
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includesymbols){
    let characters = '';
    if(includeUppercase) characters += UPPERCASE_CHARACTERS;
    if(includeLowercase) characters += LOWERCASE_CHARACTERS;
    if(includeNumbers) characters += NUMBERS;
    if(includesymbols) characters += SYMBOLS;

    let password = '';
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}