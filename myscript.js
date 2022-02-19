
const appContent = document.querySelector('#content')
// const button = document.querySelector('#button')
const input = document.querySelector('#input')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const password = document.querySelector('#password')
const users = document.querySelector('#users')
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
    "<div class='nationality'>" + user.nationality + "</div>" +
    "<div class='password'>" + ("*").repeat(user.password.length) + "</div>"
    + "</li>"
let format2Csv = user => user.userName + "," + user.phoneNumber + "," + user.nationality + "," + user.password
let formatArr = (arrX) => "<ul>" + arrX.map(formatPNPli).join("") + "</ul>"
let phoneNumbers = {
    arr: [],
    add: user => phoneNumbers.arr.push(user),
    sort: () => phoneNumbers.arr.sort(
        (x, y) => (x.userName > y.userName) ? 1 : -1),
    getsg: () => phoneNumbers.arr.filter(x => sgnumber(x.phoneNumber)),
    format: () => formatArr(phoneNumbers.arr),
    formatCsv: () => phoneNumbers.arr.map(format2Csv).join("\n")
}

let filtered = false
const buttonTrigger = () => {
    let b
    if (isNumber(input2.value)) {
        let newEntry = {
            userName: input.value,
            phoneNumber: input2.value,
            nationality: input3.value,
            password: password.value
        }// makePhoneNumberPair(userName, phoneNumber)
        phoneNumbers.add(newEntry)
        print(phoneNumbers.format())
        filtered = false
        users.innerHTML = "(" + phoneNumbers.arr.length + ")"
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
    password.value = ""
    phoneNumbers.arr = []
    print("<center>Entries cleared!</center>")
    users.innerHTML = "(" + phoneNumbers.arr.length + ")"
}

const downLoadButtonTrigger = () => {
    const content = phoneNumbers.formatCsv()
    window.open(
        encodeURI("data:text/csv;charset=utf-8," + content)
    )
}
users.innerHTML = "(" + phoneNumbers.arr.length + ")"
//let i = 100
//while (i >= 0) {
//	add(i + "<br>")
//  i -= 1
//}</script>li