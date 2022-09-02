/**************** CODING CHALLENGES ****************/



///// *************** PANGRAM *************** /////
///// *************** VERSION 1 *************** /////
function isPangram(x) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let regularExpression = /\s/g
    let lowerCaseX = x.toLowerCase().replace(regularExpression, '')
    for (let i = 0; i < alphabet.length; i++) {
        if (lowerCaseX.indexOf(alphabet[i]) === -1) {
            return 'false'
        }
    }
    return 'true'
}
document.getElementById('tester').innerHTML = isPangram('The  quick brown fox jumps over the lazy DOG')
///// *************** VERSION 2 *************** /////
const abc = 'abcdefghijklmnopqrstuvwxyz'
const isPangram2 = (string) => {
    const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
    return processedString === abc
}
document.getElementById('tester').textContent = isPangram2('The quick brown fox jumps over the lazy DOG')
///// *************** VERSION 3 *************** /////
const isPangram3 = (string) => {
    const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi))
    return regexMatch.size === 26
}
document.getElementById('tester').textContent = isPangram3('The quick brown fox jumps over the lazy DOG')
///// *************** END OF PANGRAM *************** /////



///// *************** FIND ALL OBJECTS WITH LETTER 'K' IN THEIR NAME *************** /////
/// *************** FROM A FETCH *************** /////
/// *************** AND ONLY RETURN "NAME" & "EMAIL" *************** /////
const getUsers = async () => {
    const api = 'http://jsonplaceholder.typicode.com/users'
    const response = await fetch(api)
    const json = await response.json()
    const result = json.filter(element => element.name.toLowerCase().includes('k')).map(e => {
        return {
            name: e.name,
            email: e.email
        }
    })
    return result
}
(async function() {
    try {
        console.log(await getUsers())
    }
    catch (error) {
        console.log(error)
    }
})()
///// *************** END OF FETCH API CHALLENGE *************** /////



///// *************** RAIN LANGUAGE TRANSLATOR CHANLLENGE *************** /////
const toRainLanguage = num => {
    let result = ''
    if (num % 3 === 0) {
        result += ' Pling'
    }
    if (num % 5 === 0) {
        result += ' Plang'
    }
    if (num % 7 === 0) {
        result += ' Plong'
    }
    return result === '' ? num : result
}
console.log(toRainLanguage(15))
console.log(toRainLanguage(35))
console.log(toRainLanguage(21))
console.log(toRainLanguage(2))
console.log(toRainLanguage(105))
///// *************** END OF RAIN LANGUAGE TRANSLATOR *************** /////



///// *************** ISOGRAM CHALLENGE *************** /////
const isIsogram = (str) => {
    const lowerCased = str.toLowerCase()
    const result = lowerCased.split('').every((value, index) => lowerCased.indexOf(value) === index)
    return result
}
console.log(isIsogram('ambidExtRously'))
console.log(isIsogram('patteRN'))
///// *************** END OF ISOGRAM CHALLENGE *************** /////



///// *************** LEAP YEAR CHALLENGE *************** /////
const isLeapYear = (year) => {
    let result = false
    if (year % 100 === 0 && year % 400 != 0) {
        result = false
    } else if (year % 4 === 0) {
        result = true
    }
    
    return result
}
console.log(isLeapYear(2020))
console.log(isLeapYear(2018))
console.log(isLeapYear(1700))
console.log(isLeapYear(1600))
///// *************** END OF LEAP YEAR CHALLENGE *************** /////



///// *************** ENCODE/DECODE CHALLENGE *************** /////
const encode2 = (str) => {
    const result = str.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`)

    return result
}
const decode2 = (str) => {
    const result = str.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
    return result
}
const encode = (str) => {
    let result = ''
    if (str.length > 0) {
        let count = 1
        let temp = str[0]
        for (let i = 1; i < str.length; i++) {
            if (temp === str[i]) {
                count++
            } else {
                result += count + temp
                count = 1
                temp = str[i]
            }
        }
        result += count + temp
    }
    return result
}
const decode = (str) => {
    const result = str.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
    return result
}
console.log(encode('wwwiiuuuu'))
console.log(decode('2u3a4o'))
///// *************** END OF ENCODE/DECODE CHALLENGE *************** /////



///// *************** REMOVE DUPLICATE VALUES CHALLENGE *************** /////
const removeDuplicateValues2 = (arr) => {
    return arr.reduce((accumulator, value) => {
        return accumulator.includes(value) ? accumulator : [...accumulator, value]
    },[])
}
const removeDuplicateValues = (arr) => {
    result = []
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(removeDuplicateValues(['seven', 'four', 'thirteen', 'one', 'thirteen', 'two', 'three', 'three', 'four', 'two']))
///// *************** END OF REMOVE DUPLICATE VALUES CHALLENGE *************** /////



/// *************** CREATE YOUR OWN .map() FUNCTION CHALLENGE *************** /////
const map = (array, callback) => {
    return array.reduce((accumulator, value) => {
        return [...accumulator, callback(value)]
    }, [])
}
console.log(map([1,2,3], (value) => value + 1))
/// *************** END OF CREATE YOUR OWN .map() FUNCTION CHALLENGE *************** /////



/// ***************  makeFlat() FUNCTION CHALLENGE *************** /////
const makeFlat = (array) => {
    return array.reduce((accumulator, value) => {
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator, value]
    }, [])
}
console.log(makeFlat(['one', ['two', 'three'], ['four', ['five']]]))
/// *************** END OF  makeFlat() FUNCTION CHALLENGE *************** /////



///// *************** transposeMatrix() FUNCTION CHALLENGE *************** /////
const transposeMatrix = (array) => {
    return array[0].map((_, index) => array.map(value => value[index]))
}
console.log(transposeMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]))
///// *************** END OF  transposeMatrix() FUNCTION CHALLENGE *************** /////