const range = n => [...Array(n).keys()]
let x = 0
let counter = []

while (x < 9) {
    x = x + 1
    counter.push(x)
}

const app = document.querySelector("#app")
const middlePart = counter.map(x => `<div class="col-sm x${x}"> </div>`).join("")
let a = counter.map(x => `<div class="row y${x}">${middlePart} </div>`).join("")
app.innerHTML = a

let coordx = 1
let coordy = 1
let oldx = 2
let oldy = 2
console.log(app.style.width)
const updateCoord = (x, y, oldx, oldy) => {
    console.log(x, y, oldx, oldy)
selected = document.querySelector(`#app .y${y} .x${x}`)
unselected = document.querySelector(`#app .y${oldy} .x${oldx}`)
selected.classList.add("hightlighted")
unselected.classList.remove("hightlighted")
}
//selected.classList.remove("asdkfj")
updateCoord(coordx, coordy, oldx, oldy)
document.addEventListener('keydown', event => {
    if (event.code == "ArrowLeft") {
        if (coordx > 1) {
            oldx = coordx
            oldy = coordy
            coordx = coordx - 1
        }
    }
    else if (event.code == "ArrowRight") {
        oldx = coordx
        oldy = coordy
        coordx = coordx + 1
    if (coordx > 9){
        coordx = 9
        oldy = coordy
        oldx = coordx - 1
        }
    }
    else if (event.code == "ArrowUp") {
        if (coordy > 1) {
            oldy = coordy
            oldx = coordx
            coordy = coordy - 1
        }
    }
    else if (event.code == "ArrowDown") {
        oldy = coordy
        oldx = coordx
        coordy = coordy + 1
        if (coordy > 9) {
            coordy = 9
            oldx = coordx
            oldy = coordy - 1
        }

    }
    updateCoord(coordx, coordy, oldx, oldy)
})


