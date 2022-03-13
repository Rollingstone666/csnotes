const app = document.querySelector("#app")
console.log(app.style.width)
let a = 5
let b = 10
document.addEventListener('keydown', event => {
    if (event.code == "ArrowLeft") {
        if (a > 0) {
            a = a - 1
            app.style.width = String(a) + "em"
        }
        else app.style.width = 0
    }
    else if (event.code == "ArrowRight") {
        a = a + 1
        app.style.width = String(a) + "em"
    }
    else if (event.code == "ArrowUp") {
        if (b > 0){
            b = b -1
            app.style.height = String(b) + "em"
        }
        else app.style.height = 0

    }
    else if (event.code == "ArrowDown") {
        b = b + 1
        app.style.height = String(b) + "em"

    }
})  


