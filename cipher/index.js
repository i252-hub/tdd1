function caesarCipher(str, shift) {
    const result = [];
    

    shift = shift % 26;
    if (shift < 0) {
        shift += 26; 
    }

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            const code = char.charCodeAt(0);
            let shiftedCode;

            if (char >= 'a' && char <= 'z') {
                shiftedCode = ((code - 97 + shift) % 26) + 97; 
            } else if (char >= 'A' && char <= 'Z') {
                shiftedCode = ((code - 65 + shift) % 26) + 65;
            }

            result.push(String.fromCharCode(shiftedCode));
        } else {
            result.push(char);
        }
    }

    return result.join('');
}

module.exports = caesarCipher;


