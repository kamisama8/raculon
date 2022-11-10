const inputSearchEl = document.querySelector('#search')
const resultSearchLengthEl = document.querySelector('#search-length')
const resultSearchEl = document.querySelector('#search-result')
const tableHeds = document.getElementsByTagName('th')
const tableDatas = document.getElementsByTagName('td')


const EventType = Object.freeze({
    'INPUT': 'input'
})

const invertString = (string) => {
    return string.split("").reverse().join("")
}

const dictionary = {
    "PIIIIP":"KAMASUTRA",  
    "IIIIII":"HAMSA",      
    "PPIIIP":"ÁTOMO",      
    "PIPPPI":"MERKABAH",   
    "PIIIPI":"APOCALIPSE", 
    "PPIIPP":"ZOHAR",      
    "PIPPII":"ABRACADABRA",
    "PPIIII":"ZION",       
    "IIIIIP":"ESFINGE",    
    "PPPIPI":"XANADU",     
    "PIPIPP":"DHARMA",     
    "IPIPII":"ARMAGEDOM",  
    "PIPIPI":"NAGUAL",     
    "PPPIPP":"ZODIACO",    
    "PPPPPI":"ASTRAL",     
    "PIIPIP":"VEDAS",      
    "IPPIPI":"SHALOM",
    "IPPIII":"SEFIROT",
    "PIPIII":"EXCALIBUR",
    "PPIPPP":"RAGNAROK",
    "PIIPPI":"I-CHING",
    "PPIPII":"MENORAH",
    "IPIIII":"ORION",
    "IIIPPI":"METATRON",
    "PIPPIP":"SHAMBHALA",
    "IIIIPP":"ANKH",
    "PPIPIP":"SAMSARA",
    "IPPIPP":"TARTARIA",
    "PPIIPI":"FÉ",
    "IIPIPI":"CABALA",
    "IIPPII":"TORUS",
    "PIIIPP":"CHAKRA",
    "IPPPIP":"NAMASTE",
    "PIPPPP":"DRAGÃO",
    "IPPPPP":"MATRIX",
    "IIPIIP":"VAJRA",
    "IPIPPP":"ELDORADO",
    "IPPPII":"ÉFODE",
    "PIIIII":"MANDALA",
    "IIPPIP":"THANGKA",
    "IPPPPI":"BAKTUN",
    "PIPIIP":"OUIJA",
    "PPIPPI":"HAMURABI",
    "PIIPPP":"QUARESMA",
    "PPPIIP":"DIVINDADE",
    "IIIPII":"ULURU",
    "PPPPPP":"MÖBIUS",
    "PPPPII":"MALKUTH",
    "IIIPIP":"GNOSE",
    "IPPIIP":"CHI",
    "IPIIPI":"UMBRAL",
    "IPIPPI":"DEJAVU",
    "IPIIPP":"CÁLICE",
    "IIIIPI":"RUNA",
    "IIPIII":"LEI",
    "IPIIIP":"PANDORA",
    "IIIPPP":"GOÉCIA",
    "PPPIII":"HEXAGRAMA",
    "IIPIPP":"AKASHA",
    "PPPPIP":"KAMIKAZE",
    "IIPPPI":"KADOSH",
    "PIIPII":"NATUREZA",
    "IPIPIP":"CAVERNA",
    "IIPPPP":"ANJO",
}

const gematria = 'abcdefghijklmnopqrstuvwxyz'
const gematriaInverse = invertString(gematria)

//const gematria1 = 'abcdefghijklm'
//const gematria2 = 'zyxwvutsrqpon'
const gematria1 = 'abcdefg'
const gematria2 = 'mlkjih'
const gematria3 = 'nopqrst'
const gematria4 = 'zyxwvu'



inputSearchEl.addEventListener(EventType.INPUT, event => {
    const text = event.target.value.replace(/ /g,"").replace("ê","e").replace("ã","a").replace("á","a").replace("à","a").replace("é","e").replace("ó","o")
    
    const first = loko(text.replace("ç","c").toLowerCase())
    const second = Number(invertString(`${first}`))
    const third = getGematria(text.replace("ç","c"), gematria1)+getGematria(text, gematria2)+getGematria(text, gematria3)+getGematria(text, gematria4)
    const fourth = Number(invertString(`${third}`))
    const fifth = loko2(text.replace("ç","c").toLowerCase())
    const sixth = Number(invertString(`${fifth}`))

    const firstLetter = numberToLetter(first)
    const secondLetter = numberToLetter(second)
    const thirdLetter = numberToLetter(third)
    const fourthLetter = numberToLetter(fourth)
    const fifthLetter = numberToLetter(fifth)
    const sixthLetter = numberToLetter(sixth)
    const searchValue = dictionary[firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter + sixthLetter]
    const numberByLetter = [
        { 'number': first, 'letter': firstLetter },
        { 'number': second, 'letter': secondLetter },
        { 'number': third, 'letter': thirdLetter },
        { 'number': fourth, 'letter': fourthLetter },
        { 'number': fifth, 'letter': fifthLetter },
        { 'number': sixth, 'letter': sixthLetter }
    ]
    setInfo(text.toUpperCase(), searchValue, numberByLetter)
})

function sumDigits(sum) {
    if (sum <= 9 && sum >= 0) {
        return sum
    }
    const sumString = `${sum}`
    return sumDigits(sumDigitsString(sumString))
}

function sumDigitsString(string) {
    let sum = 0
    string.split('').forEach(value => sum += Number(value))
    return sum
}

function getGematria(text, gematriaText) {
    let sumGematria = 0;
    text.split('').forEach(letter => {
        sumGematria += (gematriaText.indexOf(letter.toLowerCase()) + 1)//.toLowerCase()
    })
    return sumGematria
}

function loko(phrase) {
  var sum=0;
  for (var i=0; i<phrase.length; i++) {
    letter = phrase.substring (i, i+1);
    val = 0;
    if (letter == "a") {val = 2}
    if (letter == "b") {val = 3}
    if (letter == "c") {val = 5}
    if (letter == "d") {val = 7}
    if (letter == "e") {val = 11}
    if (letter == "f") {val = 13}
    if (letter == "g") {val = 17}
    if (letter == "h") {val = 19}
    if (letter == "i") {val = 23}
    if (letter == "j") {val = 29}
    if (letter == "k") {val = 31}
    if (letter == "l") {val = 37}
    if (letter == "m") {val = 41}
    if (letter == "n") {val = 43}
    if (letter == "o") {val = 47}
    if (letter == "p") {val = 53}
    if (letter == "q") {val = 59}
    if (letter == "r") {val = 61}
    if (letter == "s") {val = 67}
    if (letter == "t") {val = 71}
    if (letter == "u") {val = 73}
    if (letter == "v") {val = 79}
    if (letter == "w") {val = 83}
    if (letter == "x") {val = 89}
    if (letter == "y") {val = 97}
    if (letter == "z") {val = 101}
    sum = sum + val;
    }
  return sum;
  }

function loko2(phrase) {
  var sum=0;
  for (var i=0; i<phrase.length; i++) {
    letter = phrase.substring (i, i+1);
    val = 0;
    if (letter == "z") {val = 2}
    if (letter == "y") {val = 3}
    if (letter == "x") {val = 5}
    if (letter == "w") {val = 7}
    if (letter == "v") {val = 11}
    if (letter == "u") {val = 13}
    if (letter == "t") {val = 17}
    if (letter == "s") {val = 19}
    if (letter == "r") {val = 23}
    if (letter == "q") {val = 29}
    if (letter == "p") {val = 31}
    if (letter == "o") {val = 37}
    if (letter == "n") {val = 41}
    if (letter == "m") {val = 43}
    if (letter == "l") {val = 47}
    if (letter == "k") {val = 53}
    if (letter == "j") {val = 59}
    if (letter == "i") {val = 61}
    if (letter == "h") {val = 67}
    if (letter == "g") {val = 71}
    if (letter == "f") {val = 73}
    if (letter == "e") {val = 79}
    if (letter == "d") {val = 83}
    if (letter == "c") {val = 89}
    if (letter == "b") {val = 97}
    if (letter == "a") {val = 101}
    sum = sum + val;
    }
  return sum;
  }








function numberToLetter(number) {
    if (number % 2 === 0) {
        return 'P'
    }
    return 'I'
}

function setInfo(searchKey, searchValue, numberByLetter) {
    if (searchKey && searchValue && numberByLetter) {
        resultSearchLengthEl.innerHTML = `${searchKey.length} letras`
        resultSearchEl.innerHTML = `${searchKey} = ${searchValue}`
        setTableContent(numberByLetter)
    } else {
        resultSearchEl.innerHTML = ''
        resultSearchLengthEl.innerHTML = ''
        emptyTable()
    }
}

function setTableContent(numberByLetter) {
    numberByLetter.forEach((element, index) => {
        tableHeds[index].innerHTML = `${numberByLetter[index]['number']}`
        tableDatas[index].innerHTML = `${numberByLetter[index]['letter']}`
    })
}

function emptyTable() {
    for (let i = 0; i < 6; ++i) {
        tableHeds[i].innerHTML = '0'
        tableDatas[i].innerHTML = '?'
    }    
}
