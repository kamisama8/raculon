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
    "PIIIPI":"MAGO",
    "PPIIII":"CAVALEIRO",
    "PIIIII":"GUERREIRO",
    "IIIIPI":"GLADIADOR",
    "PIPIIP":"MONGE",
    "IIPIIP":"XAMÃ",
    "IPPIII":"PIRATA",
    "IIPIPI":"BARBARO",
    "PPIPPI":"MÁGICO",
    "PPPIII":"BRUXO",
    "IIPIII":"FEITICEIRO",
    "IIIIII":"FILÓSOFO",
    "PIPPII":"CIENTISTA",
    "IIPPPI":"PROFESSOR",
    "PIPIPI":"ALQUIMISTA",
    "PPIIPI":"HACKER",
    "PIPPIP":"GÊNIO",
    "PPPIIP":"SÁBIO",
    "PIIPII":"OCULTISTA",
    "PPIPPP":"MESTRE",
    "PIIPPI":"GUARDIÃO",
    "PPPPII":"CABALISTA",
    "IPIIPI":"PROFETA",
    "PIPIII":"SACERDOTE",
    "IIIPPI":"EREMITA",
    "PPPPPI":"SULTÃO",
    "IPPPII":"PASTOR",
    "IIPPII":"RABINO",
    "IIIPII":"VISIONÁRIO",
    "PPIPII":"SAMURAI",
    "PPPPIP":"NINJA",
    "IPIPPI":"CHEFE",
    "PPPIPP":"ANJO",
    "IPIPII":"CIGANO",
    "PIPPPI":"MENSAGEIRO",
    "IPIIII":"ANCIAO",
    "IPIIIP":"SNIPER",
    "PPIPIP":"LOUCO",
    "PIIPIP":"REI",
    "IPPPPI":"BISPO",
    "PPPPPP":"JUIZ",
    "IPPIPI":"MONARCA",
    "PPPIPI":"OLIGARCA",
    "PIIIPP":"MARUJO",
    "IPPPIP":"GURU",
    "PPIIPP":"MÚSICO",
    "IIIIPP":"ADMINISTRADOR",
    "IIIPPP":"HERÓI",
    "IIIIIP":"SENHOR",
    "IPPPPP":"PACIFICADOR",
    "PPIIIP":"DUQUE",
    "IIPPPP":"CULTO",
    "IIPIPP":"SUPERINTENDENTE",
    "PIPIPP":"NOVIÇO",
    "PIPPPP":"CLARIVIDENTE",
    "IPIPPP":"SANTO",
    "IPPIIP":"XEIQUE",
    "PIIPPP":"ASTUTO",
    "IIIPIP":"OUSADO",
    "PIIIIP":"FEROZ",
    "IIPPIP":"OPOSITOR",
    "IPIPIP":"DESTRO",
    "IPIIPP":"CAPAZ",
    "IPPIPP":"ATIVO"
}

const gematria = 'abcdefghijklmnopqrstuvwxyz'
const gematriaInverse = invertString(gematria)

const gematria1 = 'abcdefghijklm'
const gematria2 = 'zyxwvutsrqpon'

inputSearchEl.addEventListener(EventType.INPUT, event => {
    const text = event.target.value.replace(/ /g,"").replace("ê","e").replace("ã","a").replace("á","a").replace("à","a").replace("é","e").replace("ó","o")
    
    const first = getGematria(text.replace("ç","c"), gematria)
    const second = Number(invertString(`${first}`))
    const third = getGematria(text.replace("ç","c"), gematria1)+getGematria(text, gematria2)
    const fourth = Number(invertString(`${third}`))
    const fifth = getGematria(text.replace("ç","c"), gematriaInverse)
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
