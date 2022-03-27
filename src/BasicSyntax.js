export function romanToInteger(str) {
    const convertDictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let rimNumber = str.split('');
    let result = 0;

    for (let i = 0; i < rimNumber.length; i++) {
        if (
            i + 1 < rimNumber.length &&
            convertDictionary[rimNumber[i]] <
                convertDictionary[rimNumber[i + 1]]
        ) {
            result -= convertDictionary[rimNumber[i]];
        } else {
            result += convertDictionary[rimNumber[i]];
        }
    }

    return result;
}
