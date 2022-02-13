
  const appContent = document.querySelector('#content')
  const button = document.querySelector('#button')
  const input = document.querySelector('#input')
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
  let formatPNPli = pnp => "<li>" +
    "<div class='userName'>" + pnp.userName + "</div>" +
    "<div class='phoneNumber'>" + pnp.phoneNumber + "</div>"
    + "</li>"
  let formatArr = (arrX) => "<ul>" + arrX.map(formatPNPli).join("") + "</ul>"
  let makePhoneNumberPair = (usr, pn) => {
    return {
      userName: usr,
      phoneNumber: pn
    }
  }
  let phoneNumbers = {
    arr: [],
    add: pnp => phoneNumbers.arr.push(pnp),
    sort: () => phoneNumbers.arr.sort(
      (x, y) => (x.userName > y.userName) ? 1 : -1),
    getsg: () => phoneNumbers.arr.filter(x => sgnumber(x.phoneNumber)),
    format: () => formatArr(phoneNumbers.arr)
  }

  let filtered = false
  const buttonTrigger = () => {
    a = input.value
    let b
    if (isNumber(a.split(",")[1])) {
      phoneNumbers.add(makePhoneNumberPair(a.split(",")[0], a.split(",")[1]))
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
//let i = 100
//while (i >= 0) {
//	add(i + "<br>")
//  i -= 1
//}</script>