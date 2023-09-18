const inpKode = document.getElementById("inpKode")
const inpName = document.getElementById("inpName")
const inpHref = document.getElementById("inpHref")
const inpRegionsKode = document.getElementById("inpRegionsKode")
const postButton = document.getElementById("postButton")
const putButton = document.getElementById("putKommune")

const kommuneUrl = "http://localhost:8080/kommune"

function getKommune() {
    const kommune = {}
    kommune.kode = inpKode.value
    kommune.navn = inpName.value
    kommune.href = inpHref.value
    kommune.region = {}
    kommune.region.kode = inpRegionsKode.value
    console.log(kommune)
    return kommune
}

async function postKommune() {
    const kommune = getKommune()
    const response = await postObjectAsJson(kommuneUrl, kommune, "POST")
    if (response.ok) {
        alert("Kommune gemt")
    }
}

async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}

async function putKommune() {
    const Kommune = getKommune()
    const putUrl = KommuneUrl + "/" + Kommune.kode
    console.log(putUrl)
    const res = await postObjectAsJson(putUrl, Kommune, "PUT")
    if (res.ok) {
        alert("Kommune updated")
    }
}


postButton.addEventListener("click", postKommune)
putButton.addEventListener("click", putKommune)