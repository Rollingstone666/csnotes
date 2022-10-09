const isSubString = (x, y) => {
    let i1 = 0
    while (i1 < y.length) {
        i1 = i1 + 1
        if (x[0] === y[i1 - 1]) {
            let i = 0
            let counter = 0
            while (i < x.length) {
                i = i + 1
                if (x[i - 1] === y[i1 - 1 + i - 1]) {
                    counter = counter + 1
                }
            }
            if (counter === x.length) {
                return true
            }
        }
    }
    return false
}
const input = document.querySelector("header input")
const url = "https://api.opendota.com/api/teams"
const app = document.querySelector("#app")
const mb0 = document.querySelector(".mb-0")
const mb1 = document.querySelector(".mb-1")
const cardtext = document.querySelector(".card-text")
const logo = document.querySelector(".col-auto")
const formatDate = x => {
    let a = new Date((x.last_match_time) * 1000)
    return `${a.getFullYear()}/${a.getMonth() + 1}/${a.getDate()}`
}
const formatTeam = team =>
    `<div class="col-md-15 team" id="search-${team.team_id}">
    <div class="teaminner row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Team</strong>
            <h3 class="mb-0">${team.name}</h3>
            <div class="mb-1 text-muted">Wins:${team.wins}, Losses:${team.losses}</div>
            <p class="mb-auto fs-5 text-muted">Last match date:${formatDate(team)}</p>
            <div>
            <button type="button" class="w-px-4 btn btn-lg btn-outline-primary" id="button-${team.team_id}" onclick="buttonTrigger('${team.team_id}')">Readmore</button>        
            <div id="content-${team.team_id}" class="invisible"></div>
            </div>
            </div>
        <div class="col-auto d-lg-block"><img src='${team.logo_url}'alt='logo'>
        </div>
    </div>
</div>`
let buttonTrigger

fetch(url).then(
    response => response.json()
).then(data => {
    buttonTrigger = x => {
        let readmore = document.querySelector(`#button-${x}`)
        let readmoreContent = document.querySelector(`#content-${x}`)
        data.filter(t => t.team_id == x).map(team => {
            readmore.classList.add("invisible")
            readmoreContent.classList.remove("invisible")
            let match = `<li class='list-group-item'><a class="link-secondary" href="matches.html?${x}">matches</a></li>`
            readmoreContent.innerHTML="loading"
            fetch(`${url}/${x}/players`).then(
                responsePlayer => responsePlayer.json()
            ).then(playerData => {
                let playerNames = playerData.filter(x => x.name !== null && x.name !== " " && x.is_current_team_member === true).map(x => {
                    return `<li class='list-group-item'><a class="link-secondary" href="player.html?id=${x.account_id}">` + x.name + "</a></li>"
                }).join("")
                readmoreContent.innerHTML = playerNames + match
            }).catch(() => {
                console.log("No team players info received for" + t.name)
            }
            )

        })
    }
    app.innerHTML = data.map(formatTeam).join("")
    let hideteam = team => document.querySelector(`#search-${team.team_id}`).classList.add("invisible")
    let showteam = team => document.querySelector(`#search-${team.team_id}`).classList.remove("invisible")
    document.addEventListener("keyup", x => {
        document.querySelector("#Noresult").innerHTML=""
        data.map(hideteam)
        if (input.value === ""){
            data.map(showteam)
            return
        }
        let counter = 0
        let i = 0
        while (i < data.length){
            if (isSubString(input.value.toLowerCase(), data[i].name.toLowerCase())
            || isSubString(input.value.toLowerCase(), data[i].tag.toLowerCase())){
                counter += 1
                showteam(data[i])
            }
            i = i + 1
        }
        if (counter === 0){
        document.querySelector("#Noresult").innerHTML="No matched team found!"
        }
    })
}
).catch(() =>
    console.log("No data received")
)
