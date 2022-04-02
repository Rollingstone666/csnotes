const url = "https://api.opendota.com/api/teams"
const app = document.querySelector("#app")
const mb0 = document.querySelector(".mb-0")
const mb1 = document.querySelector(".mb-1")
const cardtext = document.querySelector(".card-text")
const logo = document.querySelector(".col-auto")
const formatDate = x => {
    let a = new Date((x.last_match_time) * 1000)
    return `${a.getFullYear()}/${a.getMonth()}/${a.getDate()}`
}
const formatTeam = team => `<div class="col-md-6">
    <div class="row g-0 border class="rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Team</strong>
            <h3 class="mb-0">${team.name}</h3>
            <div class="mb-1 text-muted">Wins:${team.wins}, Losses:${team.losses}</div>
            <p class="mb-auto fs-5 text-muted">${formatDate(team)}</p>
            <div>
            <button type="button" class="w-px-4 btn btn-lg btn-outline-primary" id="button-${team.team_id}" onclick="buttonTrigger( '${team.team_id}')">Readmore</button>        
            <div id="content-${team.team_id}" class="invisible"></div>
            </div>
            </div>
        <div class="col-auto d-none d-lg-block"><img src='${team.logo_url}'alt='logo'>
        </div>
    </div>
</div>`
let buttonTrigger = (x) => { alert(x) }

fetch(url).then(
    response => response.json()
).then(data => {
    buttonTrigger = x => {
        let readmore = document.querySelector(`#button-${x}`)
        let readmoreContent = document.querySelector(`#content-${x}`)
        data.filter(t => t.team_id == x).map(team => {
            readmore.classList.add("invisible")
            readmoreContent.classList.remove("invisible")
            fetch(`${url}/${x}/players`).then(
                responsePlayer => responsePlayer.json()
            ).then(playerData => {
                let playerNames = playerData.filter(x => x.name !== null && x.name !== " " && x.is_current_team_member === true).map(x => {
                    let active = "" 

                    return `<li class='list-group-item  ${active}'><a class="link-secondary" href="player.html">` + x.name + "</a></li>"
                }).join("")
                readmoreContent.innerHTML = playerNames
            }).catch(() => {
                console.log("No team players info received for" + t.name)
            }
            )

        })
    }
    app.innerHTML = data.map(formatTeam).join("")
}
).catch(() =>
    console.log("No data received")
)
