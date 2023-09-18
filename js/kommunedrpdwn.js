console.log("hello drpdwn")

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
const ddKommuner = document.getElementById("ddKommuner")
const url = "https://api.dataforsyningen.dk/kommuner";
const searchButton = document.getElementById("searchButton")
const searchBar = document.getElementById("searchBar")

function fetchKommuner(any) {
    return fetch(any).then(response => response.json())
}

async function actionFetch() {
    const kommuner = await fetchKommuner(url)
    kommuner.forEach(fillDrpDwn)
    console.log(kommuner)
}

function fillDrpDwn(data) {
    const option = document.createElement("option")
    option.textContent = data.navn
    option.id = data.kode
    option.value = data.href;
    ddKommuner.appendChild(option)
}

function go() {
    ddKommuner.addEventListener("change", trigger, false)
}

function trigger() {
    var url = ddKommuner.options[ddKommuner.selectedIndex].value
    window.open(url)
}

function filterDropdown() {
    const searchText = searchBar.value.toLowerCase();
    const options = ddKommuner.getElementsByTagName("option");

    for (const option of options) {
        const optionText = option.textContent.toLowerCase();
        if (optionText.startsWith(searchText)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
}


pbFetchKommuner.addEventListener("click", actionFetch)
window.addEventListener("load",go,false);
searchButton.addEventListener("click", filterDropdown)
