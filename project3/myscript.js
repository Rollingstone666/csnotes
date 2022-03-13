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
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Team</strong>
            <h3 class="mb-0">${team.name}</h3>
            <div class="mb-1 text-muted">Wins:${team.wins}, Losses:${team.losses}</div>
            <p class="mb-auto">${formatDate(team)}</p>
        </div>
        <div class="col-auto d-none d-lg-block"><img src='${team.logo_url}'alt='logo'>
        </div>
    </div>
</div>`
fetch(url).then(
    response => response.json()
).then(data => {
    mb0.innerHTML = data[0].name
    mb1.innerHTML = `Wins:${data[0].wins}, Losses:${data[0].losses}`
    cardtext.innerHTML = formatDate(data[0])
    logo.innerHTML = `<img src='${data[0].logo_url}'alt='logo'>`
    app.innerHTML = data.map(formatTeam)
    //app.innerHTML = data.map(x => "<img src='" + x.logo_url + "'" + "alt='logo'" + ">")
    //console.log(data.map(x => "<img src='" + x.logo_url + "'" +">") + "alt='logo'" + ">")
}
).catch(() =>
    console.log("No data received")
)
