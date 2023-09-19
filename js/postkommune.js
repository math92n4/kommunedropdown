const inpKode = document.getElementById("inpKode")
const inpName = document.getElementById("inpName")
const inpHref = document.getElementById("inpHref")
const inpRegionsKode = document.getElementById("inpRegionsKode")
const postButton = document.getElementById("postButton")
const putButton = document.getElementById("putKommune")
const deleteKode = document.getElementById("deleteKode")
const deleteButton = document.getElementById("deleteButton")

const postUrl = "http://localhost:8080/addkommune"
const putUrl = "http://localhost:8080/putkommune"
const deleteUrl = "http://localhost:8080/deletekommune"

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
    const response = await postObjectAsJson(postUrl, kommune, "POST")
    if (response.ok) {
        alert("Kommune gemt")
    }
}

async function deleteKommune() {
    const kommuneKode = deleteKode.value
    const url = deleteUrl + "/" + kommuneKode
    const response = await fetch(url, {
        method: "DELETE",
    });
    if (response.ok) {
        alert("Kommune deleted");
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
    const kommune = getKommune()
    const url = putUrl + "/" + kommune.kode
    console.log(url)
    const res = await postObjectAsJson(url, kommune, "PUT")
    if (res.ok) {
        alert("Kommune updated")
    }
}


postButton.addEventListener("click", postKommune)
putButton.addEventListener("click", putKommune)
deleteButton.addEventListener("click", deleteKommune)