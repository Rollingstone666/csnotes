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

let coordx = 2
let coordy = 2
console.log(app.style.width)
const updateCoord = (x, y) => {selected = document.querySelector(`#app .y${x} .x${y}`)
selected.classList.add("hightlighted")

}
//selected.classList.remove("asdkfj")
updateCoord(coordx, coordy)
document.addEventListener('keydown', event => {
    if (event.code == "ArrowLeft") {
        if (coordy > 1) {
            coordy = coordy - 1
        }
    }
    else if (event.code == "ArrowRight") {
        coordy = coordy + 1
    if (coordy > 9){
        coordy = 9
        }
    }
    else if (event.code == "ArrowUp") {
        if (coordx > 1) {
            coordx = coordx - 1
        }
    }
    else if (event.code == "ArrowDown") {
        coordx = coordx + 1
        if (coordx > 9) {
            coordx = 9
        }

    }
    updateCoord(coordx, coordy)
})


