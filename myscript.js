
const appContent = document.querySelector('#content')
// const button = document.querySelector('#button')
const input = document.querySelector('#input')
const input2 = document.querySelector('#input2')
const print = x => {
    appContent.innerHTML = x
}
const add = x => {
    appContent.innerHTML += x
}

/* let a = input.value
print(a) */
let isNumber = a => !isNaN(Number(a))
let sgnumber = x => (x.substr(0, 3) === "+65" && x.length === 11)
let formatno = (e, i) => i + 1 + "." + e + "<br>"
let formatPNP = (e, i) => i + 1 + "." + e.userName + "," + e.phoneNumber + "<br>"
let formatPNPli = user => "<li>" +
    "<div class='userName'>" + user.userName + "</div>" +
    "<div class='phoneNumber'>" + user.phoneNumber + "</div>" +
    "<div class='nationality'>" + user.nationality + "</div>"
    + "</li>"
let formatArr = (arrX) => "<ul>" + arrX.map(formatPNPli).join("") + "</ul>"
let phoneNumbers = {
    arr: [],
    add: user => phoneNumbers.arr.push(user),
    sort: () => phoneNumbers.arr.sort(
        (x, y) => (x.userName > y.userName) ? 1 : -1),
    getsg: () => phoneNumbers.arr.filter(x => sgnumber(x.phoneNumber)),
    format: () => formatArr(phoneNumbers.arr)
}

let filtered = false
const buttonTrigger = () => {  
    let b
    if (isNumber(input2.value)) {
        let newEntry = {
            userName: input.value,
            phoneNumber: input2.value,
            nationality: input3.value
        }// makePhoneNumberPair(userName, phoneNumber)
        phoneNumbers.add(newEntry)
        print(phoneNumbers.format())
        filtered = false
    }
    else {
        (b = "This is not a Valid Input!")
        print(b + "<br>" + phoneNumbers.format())

    }
}

const sortButtonTrigger = () => {
    phoneNumbers.sort()
    print(phoneNumbers.format())
}
const filterButtonTrigger = () => {
    filtered = !filtered
    if (!filtered) {
        print(phoneNumbers.format())
    }
    else {
        arr2 = phoneNumbers.getsg()
        print(formatArr(arr2))
    }
}

const resetButtonTrigger = () => {
    input.value = ""
    input2.value = ""
    input3.value = ""
    phoneNumbers.arr = []
    print("<center>Entries cleared!</center>")
}
//let i = 100
//while (i >= 0) {
//	add(i + "<br>")
//  i -= 1
//}</script>